import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Cards, Nav, About, Detail, Error, Form, Favorites } from './components'
import useCharacterActions from './hooks/useCharacterActions'
import useAuth from './hooks/useAuth'
import useIsNavigationRoute from './hooks/useIsNavigationRoute'

function App () {
  const { characters, onSearch, onClose } = useCharacterActions()
  const { login, logout } = useAuth()
  const showNav = useIsNavigationRoute()

  return (
    <div className='App'>
      {showNav && (
        <Nav onSearch={onSearch} characters={characters} logout={logout} />
      )}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
        <Route path='/404' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
