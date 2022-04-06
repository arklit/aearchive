import { useState, useEffect } from "react";
import AW96 from "./AW96/AW96";
import SS97 from "./SS97/SS97";
import { RafSimonsTitle } from '../utils/constants';
import { Link, Route, Routes } from "react-router-dom";

function RafSimons(props) {
  const {isRafOpen, rafActive, RafClick} = props;
  const [isAw96Open, setIsAw96Open] = useState(false);
  
  function handleAw96Open() {
    setIsAw96Open(true)
  }
  function closeAll() {
    setIsAw96Open(false)
  }
  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAll();
      }
    }
    document.addEventListener('keydown', handleEscClose)
    return () => {
      document.removeEventListener('keydown', handleEscClose)
    };
  }, [])

  return(
    <>
    <li className={rafActive} onClick={RafClick}>Raf Simons</li>
    {isRafOpen && (
      <ul className="collection collection__raf">
        <li className="collection__item" onClick={handleAw96Open}>
          <Link className="collection__link" to="/archive/rafsimons/aw96">{RafSimonsTitle.aw96}</Link>
        </li>
        <SS97/>
        <li className="collection__item">SS98 Black Palms</li>
        <li className="collection__item">AW98 Radioactivity</li>
        <li className="collection__item">SS99 Kinetic Youth</li>
        <li className="collection__item">AW99 Disorder, Incubation, Isolation</li>
        <li className="collection__item">SS00 Summa cum laude</li>
        <li className="collection__item">AW00 Confusion</li>
        <li className="collection__item">AW01 Riot Riot Riot</li>
        <li className="collection__item">SS02 Woe Onto Those Who Spit On The Fear Generation</li>
        <li className="collection__item">AW02 Virginia Creeper</li>
        <li className="collection__item">SS03 Consumed</li>
        <li className="collection__item">AW03 Closer</li>
        <li className="collection__item">SS04 May The Circle Be Unbroken</li>
        <li className="collection__item">AW04 Waves</li>
        <li className="collection__item">SS05 History of the World</li>
        <li className="collection__item">AW05 History of my World</li>
        <li className="collection__item">SS06 Icarus Surgit</li>
        <li className="collection__item">AW06 La Defence</li>
        <li className="collection__item">AW08 Burlap</li>
        <li className="collection__item">SS09 Black & White</li>
        <li className="collection__item">SS10 Snake</li>
        <li className="collection__item">AW10 Velcro</li>
        <li className="collection__item">AW11 Houtje Towtje</li>
        <li className="collection__item">AW14 Sterling Ruby</li>
        <li className="collection__item">AW16 Twin Peaks</li>
        <li className="collection__item">AW17 WALK WITH ME</li>
        <li className="collection__item">SS18 Replicants</li>
        <li className="collection__item">AW18 Youth In Motion</li>
      </ul>
      )}
      <Routes>
        <Route path="aw96" element={<AW96 
        title={RafSimonsTitle.aw96}
        isOpen={isAw96Open}
        closeModal={closeAll} />}/>
      </Routes>
    </>
    )
}
export default RafSimons