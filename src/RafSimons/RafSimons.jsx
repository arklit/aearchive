import AW96 from "./AW96/AW96";
import SS97 from "./SS97/SS97";
import { RafSimonsTitle } from '../utils/constants';
import SS98 from "./SS98/SS98";
import SS99 from "./SS99/SS99";
import AW98 from "./AW98/AW98";
import AW99 from './AW99/AW99';
import SS00 from './SS00/SS00';
import AW00 from './AW00/AW00';
import AW01 from './AW01/AW01';
import AW02 from './AW02/AW02';
import AW03 from './AW03/AW03';
import AW04 from './AW04/AW04';
import AW05 from './AW05/AW05';
import AW06 from './AW06/AW06';
import AW08 from './AW08/AW08';
import AW10 from './AW10/AW10';
import AW11 from './AW11/AW11';
import AW14 from './AW14/AW14';
import AW16 from './AW16/AW16';
import AW17 from './AW17/AW17';
import AW18 from './AW18/AW18';
import SS02 from './SS02/SS02';
import SS03 from './SS03/SS03';
import SS04 from './SS04/SS04';
import SS05 from './SS05/SS05';
import SS06 from './SS06/SS06';
import SS09 from './SS09/SS09';
import SS10 from './SS10/SS10';
import SS18 from './SS18/SS18';

function RafSimons(props) {
  const {isRafOpen, rafActive, RafClick, closeModal, handleAw96Open, isAw96Open, handleSs97Open, isSs97Open, isSs99Open, 
    isSs00Open, isSs02Open, isSs03Open, isSs04Open, isSs05Open, isSs06Open, isSs09Open, isSs10Open, isSs18Open, isAw14Open, isSs98Open,
    handleSs98Open, isAw98Open, isAw99Open, isAw00Open, isAw01Open, isAw02Open, isAw03Open, isAw04Open, isAw05Open, isAw06Open, isAw08Open,
    isAw10Open, isAw11Open, isAw16Open, isAw17Open, isAw18Open, handleAw98Open, handleSs99Open, handleAw99Open, handleSs00Open, handleAw00Open,
    handleAw01Open, handleSs02Open, handleAw02Open,  handleSs03Open, handleAw03Open, handleSs04Open, handleAw04Open, handleSs05Open, handleAw05Open,
    handleSs06Open, handleAw06Open, handleAw08Open, handleSs09Open, handleSs10Open, handleAw10Open, handleAw11Open, handleAw14Open, handleAw16Open,
    handleAw17Open, handleSs18Open, handleAw18Open} = props;
  return(
    <>
    <li className={rafActive} onClick={RafClick}>Raf Simons</li>
    {isRafOpen && (
      <ul className="collection collection__raf">
        <AW96 isOpen={isAw96Open} title={RafSimonsTitle.aw96} closeModal={closeModal} openModal={handleAw96Open}/>
        <SS97 isOpen={isSs97Open} title={RafSimonsTitle.ss97} closeModal={closeModal} openModal={handleSs97Open}/>
        <SS98 isOpen={isSs98Open} title={RafSimonsTitle.ss98} closeModal={closeModal} openModal={handleSs98Open}/>
        <AW98 isOpen={isAw98Open} title={RafSimonsTitle.aw98} closeModal={closeModal} openModal={handleAw98Open}/>
        <SS99 isOpen={isSs99Open} title={RafSimonsTitle.ss99} closeModal={closeModal} openModal={handleSs99Open}/>
        <AW99 isOpen={isAw99Open} title={RafSimonsTitle.aw99} closeModal={closeModal} openModal={handleAw99Open}/>
        <SS00 isOpen={isSs00Open} title={RafSimonsTitle.ss00} closeModal={closeModal} openModal={handleSs00Open}/>
        <AW00 isOpen={isAw00Open} title={RafSimonsTitle.aw00} closeModal={closeModal} openModal={handleAw00Open}/>
        <AW01 isOpen={isAw01Open} title={RafSimonsTitle.aw01} closeModal={closeModal} openModal={handleAw01Open}/>
        <SS02 isOpen={isSs02Open} title={RafSimonsTitle.ss02} closeModal={closeModal} openModal={handleSs02Open}/>
        <AW02 isOpen={isAw02Open} title={RafSimonsTitle.aw02} closeModal={closeModal} openModal={handleAw02Open}/>
        <SS03 isOpen={isSs03Open} title={RafSimonsTitle.ss03} closeModal={closeModal} openModal={handleSs03Open}/>
        <AW03 isOpen={isAw03Open} title={RafSimonsTitle.aw03} closeModal={closeModal} openModal={handleAw03Open}/>
        <SS04 isOpen={isSs04Open} title={RafSimonsTitle.ss04} closeModal={closeModal} openModal={handleSs04Open}/>
        <AW04 isOpen={isAw04Open} title={RafSimonsTitle.aw04} closeModal={closeModal} openModal={handleAw04Open}/>
        <SS05 isOpen={isSs05Open} title={RafSimonsTitle.ss05} closeModal={closeModal} openModal={handleSs05Open}/>
        <AW05 isOpen={isAw05Open} title={RafSimonsTitle.aw05} closeModal={closeModal} openModal={handleAw05Open}/>
        <SS06 isOpen={isSs06Open} title={RafSimonsTitle.ss06} closeModal={closeModal} openModal={handleSs06Open}/>
        <AW06 isOpen={isAw06Open} title={RafSimonsTitle.aw06} closeModal={closeModal} openModal={handleAw06Open}/>
        <AW08 isOpen={isAw08Open} title={RafSimonsTitle.aw08} closeModal={closeModal} openModal={handleAw08Open}/>
        <SS09 isOpen={isSs09Open} title={RafSimonsTitle.ss09} closeModal={closeModal} openModal={handleSs09Open}/>
        <SS10 isOpen={isSs10Open} title={RafSimonsTitle.ss10} closeModal={closeModal} openModal={handleSs10Open}/>
        <AW10 isOpen={isAw10Open} title={RafSimonsTitle.aw10} closeModal={closeModal} openModal={handleAw10Open}/>
        <AW11 isOpen={isAw11Open} title={RafSimonsTitle.aw11} closeModal={closeModal} openModal={handleAw11Open}/>
        <AW14 isOpen={isAw14Open} title={RafSimonsTitle.aw14} closeModal={closeModal} openModal={handleAw14Open}/>
        <AW16 isOpen={isAw16Open} title={RafSimonsTitle.aw16} closeModal={closeModal} openModal={handleAw16Open}/>
        <AW17 isOpen={isAw17Open} title={RafSimonsTitle.aw17} closeModal={closeModal} openModal={handleAw17Open}/>
        <SS18 isOpen={isSs18Open} title={RafSimonsTitle.ss18} closeModal={closeModal} openModal={handleSs18Open}/>
        <AW18 isOpen={isAw18Open} title={RafSimonsTitle.aw18} closeModal={closeModal} openModal={handleAw18Open}/>
      </ul>
      )}

    </>
    )
}
export default RafSimons