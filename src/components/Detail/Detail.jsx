import style from './Detail.module.css'
import { useCharacter } from '../../hooks/useCharacter'

const Detail = () => {
  const character = useCharacter()
  if (!character.name) {
    return (
      <h1>
        Cargando información del personaje
        <div className={style.loader} />
      </h1>
    )
  }
  return (
    <div>
      <h1>{character?.name}</h1>
      <center>
        <img
          className={style.imgdetail}
          src={character?.image}
          alt={character?.name || ''}
        />
      </center>
      <h2>STATUS | {character?.status}</h2>
      <h2>SPECIES | {character?.species}</h2>
      <h2>GENDER | {character?.gender}</h2>
      <h2>ORIGIN | {character?.origin?.name}</h2>
    </div>
  )
}

export default Detail
