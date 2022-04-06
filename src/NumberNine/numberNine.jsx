function NumberNine(props) {
  const {isNumberNineOpen, numberNineActive, NumberNineClick} = props;
  return(
    <>
    <li className={numberNineActive} onClick={NumberNineClick}>Number (N)ine</li>
    {isNumberNineOpen && (
    <ul className="collection collection__NumberNine">
      <li className="collection__item">FW99 Rock</li>
      <li className="collection__item">SS00 Extra Heavy</li>
      <li className="collection__item">FW00 Redisun</li>
      <li className="collection__item">SS01 Time Migration</li>
      <li className="collection__item">SS02 Modern Age</li>
      <li className="collection__item">FW02 NoWhere man</li>
      <li className="collection__item">AW98 Relief</li>
      <li className="collection__item">FW03 Touch Me Im Sick / A New Morning</li>
      <li className="collection__item">SS04 Dream Baby Dream</li>
      <li className="collection__item">FW04 Give Peace A Chance</li>
      <li className="collection__item">SS05 Nightcrawler</li>
      <li className="collection__item">FW05 The High Streets</li>
      <li className="collection__item">SS06 Welcome To The Shadow</li>
      <li className="collection__item">FW06 Noir</li>
      <li className="collection__item">SS07 About A Boy</li>
      <li className="collection__item">FW07 Love God Murder</li>
      <li className="collection__item">SS08 Birds</li>
      <li className="collection__item">FW08 My Own Private Portland</li>
      <li className="collection__item">SS09 The Lonesome Heroes</li>
      <li className="collection__item">FW09 A Closed Feeling</li>
    </ul>
  )}
  </>
  )
}
export default NumberNine