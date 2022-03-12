import { NavLink } from "react-router-dom"
import NavBar from "../NavBar/NavBar"

function Header(props) {
    return(
        <section className="header">
            <NavLink to="/" className="header__logo">Æ</NavLink>
            <NavBar/>
        </section>
     )
}
export default Header