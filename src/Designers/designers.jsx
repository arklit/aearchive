import { Link, Route, useMatch, Routes } from "react-router-dom"
import Header from "../Header/header"
import RafSimons from "../RafSimons/RafSimons"
import RickOwens from "../RickOwens/RickOwens"
import Undercover from "../Undercover/Undercover"

function Designers(props) {
    const {isRafOpen, 
      RafClick, 
      UndercoverClick, 
      isUndercoverOpen, 
      RickClick, 
      isRickOpen} = props;
  const rafActive = `designers__item ${isRafOpen ? 'designers__item_active' : ''}`;
  const undercoverActive = `designers__item ${isUndercoverOpen ? 'designers__item_active' : ''}`;
  const rickActive = `designers__item ${isRickOpen ? 'designers__item_active' : ''}`
  return(
    <>
      <ul className="designers__list">
        <li className={rafActive} onClick={RafClick}>
          <Link className="designers__link" to="/archive/rafsimons">Raf Simons</Link>
        </li>
        <li className={undercoverActive} onClick={UndercoverClick}>
          <Link className="designers__link" to="/archive/undercover">Undercover</Link>
        </li>
        <li className={rickActive} onClick={RickClick}>
          <Link className="designers__link" to="/archive/rickowens">RickOwens</Link>
        </li>
        <li className="designers__item">NUMBER (N)INE</li>
        <li className="designers__item">TAKAHIROMIYASHITA The Soloist</li>
        <li className="designers__item">Carol Christian Poell</li>
        <li className="designers__item">Kiko Kostadinov</li>
        <li className="designers__item">Maison Margiela</li>
        <li className="designers__item">Comme des Garçons</li>
        <li className="designers__item">Dries Van Noten</li>
        <li className="designers__item">Visvim</li>
        </ul>
        <Routes>
        <Route path='rafsimons' element={<RafSimons isRafOpen={isRafOpen}/>}/>
        <Route path='undercover' element={<Undercover isUndercoverOpen={isUndercoverOpen}/>}/>
        <Route path='rickowens' element={<RickOwens isRickOpen={isRickOpen}/>}/>
        </Routes>
    </>
    )
}
export default Designers