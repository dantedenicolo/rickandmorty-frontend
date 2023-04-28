import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { URL_BASE } from '../utils/api'
import { removeAllFav } from '../redux/actions'
import { useDispatch } from 'react-redux'

const useAuth = () => {
  const [access, setAccess] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  async function login (userData) {
    dispatch(removeAllFav())
    const { email, password } = userData
    const URL = URL_BASE + 'login/'
    try {
      const response = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = response.data
      if (access) {
        setAccess(true)
        access && navigate('/home')
      } else {
        window.alert('Usuario o contraseña incorrectos')
      }
    } catch (error) {
      window.alert('Ha ocurrido un error: ' + error.message)
    }
  }
  // function login (userData) {
  //   // dispatch(removeAllFav())
  //   const { email, password } = userData
  //   const URL = 'http://localhost:3001/rickandmorty/login/'
  //   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //     const { access } = data
  //     if (access) {
  //       setAccess(true)
  //       access && navigate('/home')
  //     } else {
  //       window.alert('Usuario o contraseña incorrectos')
  //     }
  //   })
  // }

  const logout = () => {
    dispatch(removeAllFav())
    setAccess(false)
    navigate('/')
  }

  useEffect(() => {
    if (access === true && location.pathname === '/') {
      navigate('/home')
    } else if (access === false && location.pathname !== '/404') {
      navigate('/')
    }
  }, [access, navigate, location.pathname])

  return { access, login, logout }
}

export default useAuth
