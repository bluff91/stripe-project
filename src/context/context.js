import { useContext, useState } from 'react'
import { createContext } from 'react'
import sublinks from '../data'

export const AppContext = createContext()

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [submenuIcons, setSubmenuIcons] = useState({ page: '', links: [] })

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates)
    setIsSubmenuOpen(true)
    const page = sublinks.find((item) => item.page === text)
    setSubmenuIcons(page)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        submenuIcons,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
