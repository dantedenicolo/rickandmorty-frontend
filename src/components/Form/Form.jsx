import style from './Form.module.css'
import { useState } from 'react'
import validate from './validation'

const Form = (props) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value
    setUserData({
      ...userData,
      [property]: value
    })
    validate({ ...userData, [property]: value }, errors, setErrors)
  }

  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    if (
      !errors.password && !errors.email && userData.email && userData.password
    ) {
      props.login(userData)
    }
  }

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.title}>Iniciar sesión</h1>
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          name='email'
          value={userData.email}
          onChange={handleChange}
          className={errors.email ? style.errorInput : style.successInput}
        />
        {errors.email && <p className={style.error}>{errors.email}</p>}

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          value={userData.password}
          onChange={handleChange}
          className={errors.password ? style.errorInput : style.successInput}
        />
        {errors.password && <p className={style.error}>{errors.password}</p>}
        <button type='submit'>Login</button>
        <p className={style.creds}><b>email:</b> test@test.com || <b>password:</b> Test1234</p>
      </form>
    </div>
  )
}

export default Form
