function CCP(props) {
  const { isCCPopen } = props;
  return(
    <>
    {isCCPopen && (
    <ul className="collection collection__CCP">
      <li className="collection__item">F/W 94-95 non-intended collection</li>
      <li className="collection__item">S/S 95 1st intended collection</li>
      <li className="collection__item">F/W 95-96 Protective</li>
      <li className="collection__item">S/S 96 Piercing</li>
      <li className="collection__item">F/W 96-97 Dermatographism</li>
      <li className="collection__item">S/S 97 Laser Collection</li>
      <li className="collection__item">F/W 97-98 Aerodynamics</li>
      <li className="collection__item">S/S 98 Improper</li>
      <li className="collection__item">F/W 98-99 Suffering</li>
      <li className="collection__item">S/S 99 Virtual Collection</li>
      <li className="collection__item">F/W 99-00 Form-Material-Color</li>
      <li className="collection__item">S/S 00 Form-Material-Color</li>
      <li className="collection__item">F/W 00-01 Pure-Impure</li>
      <li className="collection__item">F/W 00-01 Fe-male</li>
      <li className="collection__item">S/S 01 Three Refrigerated Cells</li>
      <li className="collection__item">F/W 01-02 Public Freedom</li>
      <li className="collection__item">S/S 02 Traditional Escape</li>
      <li className="collection__item">F/W 02-03 Protection / Good luck / Attraction</li>
      <li className="collection__item">S/S 03 Inner value / At Tamiser</li>
      <li className="collection__item">F/W 03-04 Space/Inner Space</li>
      <li className="collection__item">S/S 04 Mainstream-Downstream</li>
      <li className="collection__item">F/W 04-05 Instant Collection</li>
      <li className="collection__item">S/S 05 Dispossessed</li>
      <li className="collection__item">F/W 05-06 On Demand</li>
      <li className="collection__item">S/S 06 U-Turn</li>
      <li className="collection__item">F/W 06-07 B-Sides</li>
      <li className="collection__item">S/S 07 Paranoid</li>
      <li className="collection__item">F/W 07-08 Disjointed</li>
    </ul>
  )}
  </>
  )
}
export default CCP