function CDG(props) {
  const {isCDGOpen, CDGActive, CDGClick} = props;
  return(
    <>
    <li className={CDGActive} onClick={CDGClick}>Comme des Garçons</li>
    {isCDGOpen && (
    <ul className="collection collection__cdg">
      <li className="collection__item">any</li>
      <li className="collection__item">any</li>
      <li className="collection__item">any</li>
      <li className="collection__item">any</li>
      <li className="collection__item">any</li>
      <li className="collection__item">any</li>
    </ul>
  )}
  </>
  )
}
export default CDG