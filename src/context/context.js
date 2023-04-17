import { useContext, useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext()

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const openSubmenu = () => {
    setIsSubmenuOpen(true)
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
