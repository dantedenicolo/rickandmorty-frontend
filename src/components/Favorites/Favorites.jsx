import { useSelector, useDispatch } from 'react-redux'
import { Card } from '../'
import style from './Favorites.module.css'
import { Link } from 'react-router-dom'
import { order, filter, reset, cleanFilter } from '../../redux/actions'
import { useEffect, useState } from 'react'

const Favorites = () => {
  const myFavs = useSelector(state => state.myFavorites)
  const allCharacters = useSelector(state => state.allCharacters)
  const dispatch = useDispatch()
  const [aux, setAux] = useState(false)

  useEffect(() => {
    return () => {
      dispatch(cleanFilter())
    }
  }, [])

  const handleOrder = (e) => {
    dispatch(order(e.target.value))
    setAux(!aux)
  }

  const handleClean = () => {
    dispatch(cleanFilter())
    // set select to default
    document.getElementById('order').selectedIndex = 0
    document.getElementById('filter').selectedIndex = 0
  }

  const handleFilter = (e) => {
    if (e.target.value === 'all') {
      dispatch(reset())
    } else { dispatch(filter(e.target.value)) }
  }

  if (allCharacters.length === 0) {
    return (
      <div className={style.welcome}>
        <h2>No hay personajes marcados como favoritos</h2>
        <p>Para agregar uno, dirígete a <Link to='/home'><a>Home</a></Link> y presiona 🤍 en el personaje que quieras marcar como favorito. Luego podrás encontrar tus personajes favoritos aquí.</p>
      </div>
    )
  }

  return (
    <div>
      <select name='order' id='order' onChange={handleOrder}>
        <option disabled selected>Order by</option>
        <option value='A'>Ascendente</option>
        <option value='D'>Descendente</option>
      </select>
      <select name='filter' id='filter' onChange={handleFilter}>
        <option disabled selected>Filter by</option>
        <option value='all'>All</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </select>
      <button onClick={handleClean}>Clean filters</button>
      {myFavs.length === 0 && <h2>No hay personajes con el filtro seleccionado marcados como favoritos</h2>}
      <div className={style.cards}>
        {
        myFavs.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            img={character.img}
            species={character.species}
            gender={character.gender}
            status={character.status}
          />
        ))
      }
      </div>
    </div>
  )
}

export default Favorites
