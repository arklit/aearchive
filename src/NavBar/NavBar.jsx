import { Link, NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"

function NavBar(props) {
  const {pathname} = useLocation();
  const main = pathname === '/' ? 'NavBar__link_active NavBar__link' : 'NavBar__link';
  const contacts = pathname ==='/contacts' ? 'NavBar__link_active NavBar__link' : 'NavBar__link';
  const about = pathname ==='/about' ? 'NavBar__link_active NavBar__link' : 'NavBar__link';
  return(
    <div className="NavBar">
      <NavLink className={main} to="/">ARCHIVE</NavLink>
      <NavLink className={contacts} to="/contacts">CONTACTS</NavLink>
      <NavLink className={about} to="/about">ABOUT US</NavLink>
    </div>
  )
}
export default NavBar