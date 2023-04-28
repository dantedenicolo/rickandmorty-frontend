import { useLocation } from 'react-router-dom'

const useIsNavigationRoute = () => {
  const location = useLocation()
  const isNavigationRoute =
    location.pathname !== '/' && location.pathname !== '/404'

  return isNavigationRoute
}

export default useIsNavigationRoute
