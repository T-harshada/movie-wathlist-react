import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext()

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  // browser back and to forward button 
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handler)
    return () => {
      window.removeEventListener('popstate', handler)
    }
  },[])
  const navigateTo = (url) => {
    window.history.pushState({}, '', url)
    setCurrentPath(url)
  }
  return (
    <NavigationContext.Provider value={{currentPath, navigateTo}}>
      {children}
    </NavigationContext.Provider>
  )
}
export { NavigationProvider }
export default NavigationContext