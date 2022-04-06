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
        <RafSimons rafActive={rafActive} isRafOpen={isRafOpen} RafClick={RafClick}/>
        <Undercover 
        undercoverActive={undercoverActive} 
        isUndercoverOpen={isUndercoverOpen}
        UndercoverClick={UndercoverClick}/>
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
        {/* <Routes>
        <Route path='rafsimons/*' element={<RafSimons isRafOpen={isRafOpen}/>}/>
        <Route path='undercover' element={<Undercover isUndercoverOpen={isUndercoverOpen}/>}/>
        <Route path='rickowens' element={<RickOwens isRickOpen={isRickOpen}/>}/>
        <Route path='numbernine' element={<NumberNine isNumberNineOpen={isNumberNineOpen}/>}/>
        <Route path='ccp' element={<CCP isCCPopen={isCCPopen}/>}/>
        <Route path='margiela' element={<MaisonMargiela isMaisonMargielaOpen={isMaisonMargielaOpen}/>}/>
        </Routes> */}
    </>
    )
}
export default Designers