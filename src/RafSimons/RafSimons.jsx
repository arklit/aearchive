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
import { Routes, Route, Link } from "react-router-dom";

function RafSimons(props) {
  const {isRafOpen, closeModal, handleAw96Open, isAw96Open, handleSs97Open, isSs97Open, isSs99Open, 
    isSs00Open, isSs02Open, isSs03Open, isSs04Open, isSs05Open, isSs06Open, isSs09Open, isSs10Open, isSs18Open, isAw14Open, isSs98Open,
    handleSs98Open, isAw98Open, isAw99Open, isAw00Open, isAw01Open, isAw02Open, isAw03Open, isAw04Open, isAw05Open, isAw06Open, isAw08Open,
    isAw10Open, isAw11Open, isAw16Open, isAw17Open, isAw18Open, handleAw98Open, handleSs99Open, handleAw99Open, handleSs00Open, handleAw00Open,
    handleAw01Open, handleSs02Open, handleAw02Open,  handleSs03Open, handleAw03Open, handleSs04Open, handleAw04Open, handleSs05Open, handleAw05Open,
    handleSs06Open, handleAw06Open, handleAw08Open, handleSs09Open, handleSs10Open, handleAw10Open, handleAw11Open, handleAw14Open, handleAw16Open,
    handleAw17Open, handleSs18Open, handleAw18Open} = props;
  return(
    <>
    {isRafOpen && (
      <ul className="collection collection__raf">
        <li onClick={handleAw96Open}>
          <Link className="collection__item" to='aw96'>{RafSimonsTitle.aw96}</Link>
        </li>
        <li onClick={handleSs97Open}>
          <Link className="collection__item" to='ss97'>{RafSimonsTitle.ss97}</Link>
        </li>
        <li onClick={handleSs98Open}>
          <Link className="collection__item" to='ss98'>{RafSimonsTitle.ss98}</Link>
        </li>
        <li onClick={handleAw98Open}>
          <Link className="collection__item" to='aw98'>{RafSimonsTitle.aw98}</Link>
        </li>
        <li onClick={handleSs99Open}>
          <Link className="collection__item" to='ss99'>{RafSimonsTitle.ss99}</Link>
        </li>
        <li onClick={handleAw99Open}>
          <Link className="collection__item" to='aw99'>{RafSimonsTitle.aw99}</Link>
        </li>
        <li onClick={handleSs00Open}>
          <Link className="collection__item" to='ss00'>{RafSimonsTitle.ss00}</Link>
        </li>
        <li onClick={handleAw00Open}>
          <Link className="collection__item" to='aw00'>{RafSimonsTitle.aw00}</Link>
        </li>
        <li onClick={handleAw01Open}>
          <Link className="collection__item" to='aw01'>{RafSimonsTitle.aw01}</Link>
        </li>
        <li onClick={handleSs02Open}>
          <Link className="collection__item" to='ss02'>{RafSimonsTitle.ss02}</Link>
        </li>
        <li onClick={handleAw02Open}>
          <Link className="collection__item" to='aw02'>{RafSimonsTitle.aw02}</Link>
        </li>
        <li onClick={handleSs03Open}>
          <Link className="collection__item" to='ss03'>{RafSimonsTitle.ss03}</Link>
        </li>
        <li onClick={handleAw03Open}>
          <Link className="collection__item" to='aw03'>{RafSimonsTitle.aw03}</Link>
        </li>
        <li onClick={handleSs04Open}>
          <Link className="collection__item" to='ss04'>{RafSimonsTitle.ss04}</Link>
        </li>
        <li onClick={handleAw04Open}>
          <Link className="collection__item" to='aw04'>{RafSimonsTitle.aw04}</Link>
        </li>
        <li onClick={handleSs05Open}>
          <Link className="collection__item" to='ss05'>{RafSimonsTitle.ss05}</Link>
        </li>
        <li onClick={handleAw05Open}>
          <Link className="collection__item" to='aw05'>{RafSimonsTitle.aw05}</Link>
        </li>
        <li onClick={handleSs06Open}>
          <Link className="collection__item" to='ss06'>{RafSimonsTitle.ss06}</Link>
        </li>
        <li onClick={handleAw06Open}>
          <Link className="collection__item" to='aw06'>{RafSimonsTitle.aw06}</Link>
        </li>
        <li onClick={handleAw08Open}>
          <Link className="collection__item" to='aw08'>{RafSimonsTitle.aw08}</Link>
        </li>
        <li onClick={handleSs09Open}>
          <Link className="collection__item" to='ss09'>{RafSimonsTitle.ss09}</Link>
        </li>
        <li onClick={handleSs10Open}>
          <Link className="collection__item" to='ss10'>{RafSimonsTitle.ss10}</Link>
        </li>
        <li onClick={handleAw10Open}>
          <Link className="collection__item" to='aw10'>{RafSimonsTitle.aw10}</Link>
        </li>
        <li onClick={handleAw11Open}>
          <Link className="collection__item" to='aw11'>{RafSimonsTitle.aw11}</Link>
        </li>
        <li onClick={handleAw14Open}>
          <Link className="collection__item" to='aw14'>{RafSimonsTitle.aw14}</Link>
        </li>
        <li onClick={handleAw16Open}>
          <Link className="collection__item" to='aw16'>{RafSimonsTitle.aw16}</Link>
        </li>
        <li onClick={handleAw17Open}>
          <Link className="collection__item" to='aw17'>{RafSimonsTitle.aw17}</Link>
        </li>
        <li onClick={handleSs18Open}>
          <Link className="collection__item" to='ss18'>{RafSimonsTitle.ss18}</Link>
        </li>
        <li onClick={handleAw18Open}>
          <Link className="collection__item" to='aw18'>{RafSimonsTitle.aw18}</Link>
        </li>

        <Routes>
          <Route path="aw96" element={<AW96 isOpen={isAw96Open} closeModal={closeModal} title={RafSimonsTitle.aw96}/>}/>
          <Route path="ss97" element={<SS97 isOpen={isSs97Open} closeModal={closeModal} title={RafSimonsTitle.ss97}/>}/>
          <Route path="ss98" element={<SS98 isOpen={isSs98Open} title={RafSimonsTitle.ss98} closeModal={closeModal}/>}/>
          <Route path="aw98" element={<AW98 isOpen={isAw98Open} title={RafSimonsTitle.aw98} closeModal={closeModal}/>}/>
          <Route path="ss99" element={<SS99 isOpen={isSs99Open} title={RafSimonsTitle.ss99} closeModal={closeModal}/>}/>
          <Route path="aw99" element={<AW99 isOpen={isAw99Open} title={RafSimonsTitle.aw99} closeModal={closeModal}/>}/>
          <Route path="ss00" element={<SS00 isOpen={isSs00Open} title={RafSimonsTitle.ss00} closeModal={closeModal}/>}/>
          <Route path="aw00" element={<AW00 isOpen={isAw00Open} title={RafSimonsTitle.aw00} closeModal={closeModal}/>}/>
          <Route path="aw01" element={<AW01 isOpen={isAw01Open} title={RafSimonsTitle.aw01} closeModal={closeModal}/>}/>
          <Route path="ss02" element={<SS02 isOpen={isSs02Open} title={RafSimonsTitle.ss02} closeModal={closeModal}/>}/>
          <Route path="aw02" element={<AW02 isOpen={isAw02Open} title={RafSimonsTitle.aw02} closeModal={closeModal}/>}/>
          <Route path="ss03" element={<SS03 isOpen={isSs03Open} title={RafSimonsTitle.ss03} closeModal={closeModal}/>}/>
          <Route path="aw03" element={<AW03 isOpen={isAw03Open} title={RafSimonsTitle.aw03} closeModal={closeModal}/>}/>
          <Route path="ss04" element={<SS04 isOpen={isSs04Open} title={RafSimonsTitle.ss04} closeModal={closeModal}/>}/>
          <Route path="aw04" element={<AW04 isOpen={isAw04Open} title={RafSimonsTitle.aw04} closeModal={closeModal}/>}/>
          <Route path="ss05" element={<SS05 isOpen={isSs05Open} title={RafSimonsTitle.ss05} closeModal={closeModal}/>}/>
          <Route path="aw05" element={<AW05 isOpen={isAw05Open} title={RafSimonsTitle.aw05} closeModal={closeModal}/>}/>
          <Route path="ss06" element={<SS06 isOpen={isSs06Open} title={RafSimonsTitle.ss06} closeModal={closeModal}/>}/>
          <Route path="aw06" element={<AW06 isOpen={isAw06Open} title={RafSimonsTitle.aw06} closeModal={closeModal}/>}/>
          <Route path="aw08" element={<AW08 isOpen={isAw08Open} title={RafSimonsTitle.aw08} closeModal={closeModal}/>}/>
          <Route path="ss09" element={<SS09 isOpen={isSs09Open} title={RafSimonsTitle.ss09} closeModal={closeModal}/>}/>
          <Route path="ss10" element={<SS10 isOpen={isSs10Open} title={RafSimonsTitle.ss10} closeModal={closeModal}/>}/>
          <Route path="aw10" element={<AW10 isOpen={isAw10Open} title={RafSimonsTitle.aw10} closeModal={closeModal}/>}/>
          <Route path="aw11" element={<AW11 isOpen={isAw11Open} title={RafSimonsTitle.aw11} closeModal={closeModal}/>}/>
          <Route path="aw14" element={<AW14 isOpen={isAw14Open} title={RafSimonsTitle.aw14} closeModal={closeModal}/>}/>
          <Route path="aw16" element={<AW16 isOpen={isAw16Open} title={RafSimonsTitle.aw16} closeModal={closeModal}/>}/>
          <Route path="aw17" element={<AW17 isOpen={isAw17Open} title={RafSimonsTitle.aw17} closeModal={closeModal}/>}/>
          <Route path="ss18" element={<SS18 isOpen={isSs18Open} title={RafSimonsTitle.ss18} closeModal={closeModal}/>}/>
          <Route path="aw18" element={<AW18 isOpen={isAw18Open} title={RafSimonsTitle.aw18} closeModal={closeModal}/>}/>
        </Routes>
      </ul>
      )}

    </>
    )
}
export default RafSimons