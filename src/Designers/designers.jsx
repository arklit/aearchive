import { Link, Route, Routes } from "react-router-dom"
import CCP from "../CCP/CCP"
import MaisonMargiela from "../MaisonMargiela/MaisonMargiela"
import NumberNine from "../NumberNine/numberNine"
import RafSimons from "../RafSimons/RafSimons"
import RickOwens from "../RickOwens/RickOwens"
import Undercover from "../Undercover/Undercover"
import CDG from "../CDG/CDG"

function Designers(props) {
  const {isRafOpen,  
    UndercoverClick, 
    isUndercoverOpen,
    RafClick,
    RickClick, 
    isRickOpen,
    NumberNineClick,
    isNumberNineOpen,
    isCCPopen,
    CCPclick,
    isMaisonMargielaOpen,
    MargielaClick,
    isCDGOpen,
    CDGClick} = props;
  const numberNineActive = `designers__item ${isNumberNineOpen ? 'designers__item_active' : ''}`
  const rafActive = `designers__item ${isRafOpen ? 'designers__item_active' : ''}`;
  const undercoverActive = `designers__item ${isUndercoverOpen ? 'designers__item_active' : ''}`;
  const rickActive = `designers__item ${isRickOpen ? 'designers__item_active' : ''}`
  const ccpActive = `designers__item ${isCCPopen ? 'designers__item_active' : ''}`
  const margielaActive = `designers__item ${isMaisonMargielaOpen ? 'designers__item_active' : ''}`
  const CDGActive = `designers__item ${isCDGOpen ? 'designers__item_active' : ''}`
  return(
    <>
      <ul className="designers__list">
        <li className={rafActive} onClick={RafClick}>
          <Link className="designers__link" to="rafsimons">Raf Simons</Link>
        </li>
        <li className={undercoverActive} onClick={UndercoverClick}>
          <Link className="designers__link" to="undercover">Undercover</Link>
        </li>
        <RickOwens rickActive={rickActive} isRickOpen={isRickOpen} RickClick={RickClick}/>
        <NumberNine numberNineActive={numberNineActive} 
        isNumberNineOpen={isNumberNineOpen}
        NumberNineClick={NumberNineClick}
        />
        <CCP ccpActive={ccpActive} 
        CCPclick={CCPclick} 
        isCCPopen={isCCPopen}/>
        <MaisonMargiela margielaActive={margielaActive} 
        MargielaClick={MargielaClick}
        isMaisonMargielaOpen={isMaisonMargielaOpen}/>
        <CDG CDGActive={CDGActive}
        isCDGOpen={isCDGOpen}
        CDGClick={CDGClick}/>
        </ul>
        <Routes>
        <Route path='rafsimons/*' element={<RafSimons rafActive={rafActive} {...props}/>}/>
        <Route path='undercover/*' element={<Undercover 
        undercoverActive={undercoverActive} 
        isUndercoverOpen={isUndercoverOpen}
        UndercoverClick={UndercoverClick}/>}/>
        <Route path='rickowens' element={<RickOwens isRickOpen={isRickOpen}/>}/>
        <Route path='numbernine' element={<NumberNine isNumberNineOpen={isNumberNineOpen}/>}/>
        <Route path='ccp' element={<CCP isCCPopen={isCCPopen}/>}/>
        <Route path='margiela' element={<MaisonMargiela isMaisonMargielaOpen={isMaisonMargielaOpen}/>}/>
        </Routes>
    </>
    )
}
export default Designers