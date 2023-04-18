import { FaTimes } from 'react-icons/fa'
import sublinks from '../data'
import { useAppContext } from '../context/context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useAppContext()

  return (
    <aside
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <div className="sidebar">
        <FaTimes className="close-btn" onClick={closeSidebar} />
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((item, index) => {
                    const { label, icon, url } = item
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
export default Sidebar
