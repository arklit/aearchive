function MaisonMargiela(props) {
  const {isMaisonMargielaOpen, margielaActive, MargielaClick} = props;
  return(
    <>
    <li className={margielaActive} onClick={MargielaClick}>Maison Margiela</li>
    {isMaisonMargielaOpen && (
    <ul className="collection collection__Margiela">
      <li className="collection__item">SS 93</li>
      <li className="collection__item">SS 95</li>
      <li className="collection__item">FW 95</li>
      <li className="collection__item">SS 96</li>
      <li className="collection__item">FW 96</li>
      <li className="collection__item">FW 97</li>
      <li className="collection__item">SS 97</li>
      <li className="collection__item">FW 97</li>
      <li className="collection__item">SS 98</li>
      <li className="collection__item">FW 98</li>
      <li className="collection__item">SS 99</li>
      <li className="collection__item">SS 0</li>
      <li className="collection__item">FW 00</li>
      <li className="collection__item">SS 01</li>
      <li className="collection__item">FW 01</li>
      <li className="collection__item">SS 06</li>
      <li className="collection__item">FW 06</li>
      <li className="collection__item">FW 07</li>
      <li className="collection__item">SS 08</li>
      <li className="collection__item">FW 08</li>
      <li className="collection__item">SS 09</li>
      <li className="collection__item">FW 09</li>
      <li className="collection__item">SS 10</li>
      <li className="collection__item">FW 10</li>
      <li className="collection__item">SS 11</li>
      <li className="collection__item">FW 11</li>
      <li className="collection__item">SS 12</li>
      <li className="collection__item">FW 12</li>
      <li className="collection__item">SS 13</li>
      <li className="collection__item">FW 13</li>
      <li className="collection__item">SS 14</li>
      <li className="collection__item">FW 14</li>
      <li className="collection__item">SS 15</li>
      <li className="collection__item">FW 15</li>
      <li className="collection__item">SS 16</li>
      <li className="collection__item">FW 16</li>
      <li className="collection__item">SS 17</li>
      <li className="collection__item">FW 17</li>
      <li className="collection__item">SS 18</li>
      <li className="collection__item">FW 18</li>
      <li className="collection__item">SS 19</li>
      <li className="collection__item">FW 19</li>
      <li className="collection__item">SS 20</li>
      <li className="collection__item">FW 20</li>
      <li className="collection__item">SS 21</li>
      <li className="collection__item">FW 21</li>
    </ul>
  )}
  </>
  )
}
export default MaisonMargiela