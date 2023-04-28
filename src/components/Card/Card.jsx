import style from './Card.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { addFav, removeFav } from '../../redux/actions'

export default function Card (props) {
  const handleClick = () => {
    props.onClose(props.id)
  }

  const dispatch = useDispatch()
  const myFavs = useSelector(state => state.myFavorites)

  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    myFavs.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true)
      }
    })
  }, [myFavs])

  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFav(props.id))
    } else {
      dispatch(addFav(props))
    }
    setIsFav(!isFav)
  }

  const handleIsFav = () => {
    return window.alert('Elimina el personaje como favorito para poder cerrarlo')
  }

  return (
    <div className={style.card}>
      <div className={style.container}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={style.details}>
        <h2>{props.name}</h2>
        <p>{props.species}</p>
        <p>{props.gender}</p>
        {
          isFav
            ? (
              <button className={style.favBtn} onClick={handleFavorite}>❤️</button>
              )
            : (
              <button className={style.favBtn} onClick={handleFavorite}>🤍</button>
              )
        }
        <br />
        <Link to={`/detail/${props.id}`}>
          <button>Más información</button>
        </Link>
        {
          isFav
            ? (
              <button onClick={handleIsFav}>Cerrar</button>
              )
            : (
              <button onClick={handleClick}>Cerrar</button>
              )
        }
      </div>
    </div>
  )
}
