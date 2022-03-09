function RafSimons(props) {
  const {isRafOpen, RafClick} = props;
  const active = `designers__item ${isRafOpen ? 'designers__item_active' : ''}`
  return(
    <>
    <li className={active} onClick={RafClick}>Raf Simons</li>
    {isRafOpen && (
      <ul className="collection">
        <li className="collection__item">AW96 We Only Come Out At Night</li>
        <li className="collection__item">SS97 How To Talk To Your Teen</li>
        <li className="collection__item">SS98 Black Palms</li>
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
      </ul>
    )}
    </>
    )
}
export default RafSimons