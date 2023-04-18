import { useEffect, useRef } from 'react'
import { useAppContext } from '../context/context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    submenuIcons: { page, links },
  } = useAppContext()

  const containerRef = useRef(null)
  const displayColums = (length) => {
    switch (length) {
      case 2:
        return 'col-2'
      case 3:
        return 'col-3'
      case 4:
        return 'col-4'
      default:
        break
    }
  }

  useEffect(() => {
    const submenu = containerRef.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location])

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={containerRef}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${displayColums(links.length)}`}>
        {links.map((item, index) => {
          const { url, icon, label } = item
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}
export default Submenu
