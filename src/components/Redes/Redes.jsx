import style from './Redes.module.css'

export const Instagram = () => {
  return (
    <a href='https://www.instagram.com/dantedenicolo/' target='_blank' rel='noreferrer'>
      <img className={style.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png' alt='Instagram logo' />
    </a>
  )
}

export const LinkedIn = () => {
  return (
    <a href='https://www.linkedin.com/in/dantedenicolo/' target='_blank' rel='noreferrer'>
      <img className={style.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png' alt='LinkedIn logo' />
    </a>
  )
}

export const GitHub = () => {
  return (
    <a href='https://github.com/dantedenicolo/' target='_blank' rel='noreferrer'>
      <img className={style.logo} src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png' alt='GitHub logo' />
    </a>
  )
}

export const Twitter = () => {
  return (
    <a href='https://twitter.com/dantutu_/' target='_blank' rel='noreferrer'>
      <img className={style.logo} src='https://imgur.com/CCqWZMY.png' alt='Twitter logo' />
    </a>
  )
}
