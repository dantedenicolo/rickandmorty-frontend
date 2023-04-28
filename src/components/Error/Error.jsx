import style from './Error.module.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className={style.container}>
      <div className={style.backgroundimg}>
        <div className={style.wrapper}>
          <div className={style.imgwrapper}>
            <center>
              <span>44</span>
            </center>
          </div>
          <p>
            La página que estás buscando no existe o ha sido movida a otro
            universo.
          </p>
          <Link to='/home'>
            <button type='button'>IR AL INICIO</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
