import logo from '../logo.svg'
import { FaBars } from 'react-icons/fa'
import { useAppContext } from '../context/context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useAppContext()

  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const location = e.target.getBoundingClientRect()
    const center = (location.left + location.right) / 2
    const bottom = location.bottom - 3
    openSubmenu(page, { center, bottom })
  }

  const handleCloseSubmenu = (e) => {
    if (e.target.className !== 'link-btn') {
      closeSubmenu()
    }
  }
  return (
    <nav className="nav" onMouseOver={handleCloseSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">SignIn</button>
      </div>
    </nav>
  )
}
export default Navbar
