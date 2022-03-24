import { Link, Route, Routes } from "react-router-dom"
import CCP from "../CCP/CCP"
import MaisonMargiela from "../MaisonMargiela/MaisonMargiela"
import NumberNine from "../NumberNine/numberNine"
import RafSimons from "../RafSimons/RafSimons"
import RickOwens from "../RickOwens/RickOwens"
import Undercover from "../Undercover/Undercover"

function Designers(props) {
  const {isRafOpen, 
    RafClick, 
    UndercoverClick, 
    isUndercoverOpen, 
    RickClick, 
    isRickOpen,
    NumberNineClick,
    isNumberNineOpen,
    isCCPopen,
    CCPclick,
    isMaisonMargielaOpen,
  MargielaClick} = props;
  const numberNineActive = `designers__item ${isNumberNineOpen ? 'designers__item_active' : ''}`
  const rafActive = `designers__item ${isRafOpen ? 'designers__item_active' : ''}`;
  const undercoverActive = `designers__item ${isUndercoverOpen ? 'designers__item_active' : ''}`;
  const rickActive = `designers__item ${isRickOpen ? 'designers__item_active' : ''}`
  const ccpActive = `designers__item ${isCCPopen ? 'designers__item_active' : ''}`
  const margielaActive = `designers__item ${isMaisonMargielaOpen ? 'designers__item_active' : ''}`
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
        <li className={numberNineActive} onClick={NumberNineClick}>
          <Link className="designers__link" to="/archive/numbernine">Number (N)ine</Link>
        </li>
        <li className={ccpActive} onClick={CCPclick}>
          <Link className="designers__link" to="/archive/ccp">Carol Christian Poell</Link>
        </li>
        <li className={margielaActive} onClick={MargielaClick}>
          <Link className="designers__link" to="/archive/margiela">Maison Margiela</Link>
        </li>
        <li className="designers__item">Kiko Kostadinov</li>
        <li className="designers__item">Comme des Garçons</li>
        <li className="designers__item">Dries Van Noten</li>
        </ul>
        <Routes>
        <Route path='rafsimons/*' element={<RafSimons isRafOpen={isRafOpen}/>}/>
        <Route path='undercover' element={<Undercover isUndercoverOpen={isUndercoverOpen}/>}/>
        <Route path='rickowens' element={<RickOwens isRickOpen={isRickOpen}/>}/>
        <Route path='numbernine' element={<NumberNine isNumberNineOpen={isNumberNineOpen}/>}/>
        <Route path='ccp' element={<CCP isCCPopen={isCCPopen}/>}/>
        <Route path='margiela' element={<MaisonMargiela isMaisonMargielaOpen={isMaisonMargielaOpen}/>}/>
        </Routes>
    </>
    )
}
export default Designers