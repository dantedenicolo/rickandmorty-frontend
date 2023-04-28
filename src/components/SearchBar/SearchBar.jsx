// import style from './SearchBar.module.css'
import { useState } from 'react'

export default function SearchBar (props) {
  const [id, setId] = useState('')
  const handleChange = (event) => {
    setId(event.target.value)
  }
  const handleSubmit = (event) => {
    props.onSearch(id)
  }

  return (
    <div>
      <input type='search' onChange={handleChange} />
      <button onClick={handleSubmit}>Agregar</button>
    </div>
  )
}
