import style from './About.module.css'
import { Instagram, Twitter, LinkedIn, GitHub } from '../'

const About = () => {
  return (
    <div className={style.container}>
      <h1>Sobre la App</h1>
      <p>¡Bienvenido a mi app de Rick and Morty! Esta aplicación fue creada utilizando la biblioteca de JavaScript React para brindar una experiencia de usuario fluida y atractiva.</p>

      <p>La app de Rick and Morty te permite explorar todos los personajes de la popular serie animada de televisión. Podrás encontrar información detallada sobre cada personaje, incluyendo su nombre, género, especie, lugar de origen y mucho más. Además, también podrás buscar personajes por su id o generar uno aleatoriamente.</p>

      <p>En resumen, esta app de Rick and Morty es la herramienta perfecta para todos los fans de la serie que quieran estar al día con los personajes. Esperamos que disfrutes navegando por la app y descubriendo más sobre este emocionante mundo de la ciencia ficción. ¡Diviértete explorando!</p>

      <h1>Sobre Mí</h1>
      <p>Mi nombre es Dante y soy un desarrollador web Full Stack. Me apasiona crear aplicaciones web interactivas y elegantes que mejoren la experiencia del usuario. Actualmente, estoy en proceso de adquirir más conocimientos y habilidades en el campus de Soy Henry y me encanta aplicar lo que aprendo en mis proyectos personales.</p>

      <p>El objetivo de mi aplicación es compartir y mostrar los conocimientos que adquirí en el campus de Soy Henry. Mi app es un espacio en el que puedo experimentar con diferentes tecnologías y herramientas de desarrollo web, así como también mejorar mis habilidades como programador.</p>

      <p>Si tienes alguna pregunta, sugerencia o simplemente quieres decir "hola", no dudes en contactarme a través de mis redes sociales. Puedes encontrarme en Twitter, Instagram y LinkedIn. Estoy siempre abierto a conocer a otras personas apasionadas por el desarrollo web y estaré encantado de hablar contigo.</p>

      <p>Gracias por visitar mi aplicación y espero que disfrutes explorando mi trabajo tanto como yo disfruto creándolo. ¡Nos vemos en la red!</p>

      <h1>Mis Redes</h1>
      <div className={style.redesContainer}>
        <Instagram />
        <Twitter />
        <LinkedIn />
        <GitHub />
      </div>

      <div className={style.copyright}>
        <p>© 2023 Dante De Nicoló. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default About
