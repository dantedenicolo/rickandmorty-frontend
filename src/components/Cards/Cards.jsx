import { Card } from '../'
import style from './Cards.module.css'
import { Link } from 'react-router-dom'

export default function Cards (props) {
  if (props.characters.length === 0) {
    return (
      <div className={style.welcome}>
        <h1>Bienvenido a mi App de Rick and Morty</h1>
        <p>
          Aquí podrás obtener información acerca de todos los personajes de la serie. Puedes conocer más <Link to='/about'>aquí</Link>.
        </p>
        <h2>No hay personajes agregados</h2>
        <p>Comienza agregando personajes buscandolos por ID en la barra de navegación superior o seleccionando uno aleatoriamente utilizando el botón que dice "Agregar random" (también ubicado en la barra superior).</p>
      </div>
    )
  }
  return (
    <div className={style.cards}>
      {props.characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            img={image}
            onClose={props.onClose}
          />
        )
      })}
    </div>
  )
}
