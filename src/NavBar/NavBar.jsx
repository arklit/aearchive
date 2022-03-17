import { NavLink } from "react-router-dom"

function NavBar() {
  const setActive = ({isActive}) => isActive ? 'NavBar__link_active NavBar__link' : 'NavBar__link';
  return(
    <div className="NavBar">
      <NavLink className={setActive} to="/archive">ARCHIVE</NavLink>
      <NavLink className={setActive} to="/contacts">CONTACTS</NavLink>
      <NavLink className={setActive} to="/about">ABOUT US</NavLink>
    </div>
  )
}
export default NavBar