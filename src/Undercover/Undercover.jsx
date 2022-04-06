function Undercover(props) {
  const {isUndercoverOpen, undercoverActive, UndercoverClick} = props;
  return(
    <>
    <li className={undercoverActive} onClick={UndercoverClick}>Undercover</li>
    {isUndercoverOpen && (
    <ul className="collection collection__undercover">
      <li className="collection__item">SS94 Languid</li>
      <li className="collection__item">AW94 But Beautiful</li>
      <li className="collection__item">SS95 But Beautiful II</li>
      <li className="collection__item">AW96 LASt SHOW</li>
      <li className="collection__item">AW97 LEAF</li>
      <li className="collection__item">SS98 DRAPE</li>
      <li className="collection__item">AW98 Relief</li>
      <li className="collection__item">SS99 Exchange</li>
      <li className="collection__item">AW99 Ambivalence</li>
      <li className="collection__item">SS00 Teaser</li>
      <li className="collection__item">AW00 Melting Pot</li>
      <li className="collection__item">SS01 Chaotic Discord</li>
      <li className="collection__item">AW01 D.A.V.F</li>
      <li className="collection__item">SS02 The Illusion of Haze</li>
      <li className="collection__item">AW02 Witch's Cell Division</li>
      <li className="collection__item">SS03 Scab</li>
      <li className="collection__item">AW03 Paper Doll</li>
      <li className="collection__item">SS04 Languid</li>
      <li className="collection__item">AW04 But Beautiful "Part Parasitic, Part Stuffed"</li>
      <li className="collection__item">SS05 But Beautiful II - "hommage to Jan Svankmajer"</li>
      <li className="collection__item">AW05 Arts and Crafts</li>
      <li className="collection__item">SS06 'T' (To the universe)</li>
      <li className="collection__item">AW06 But Beautiful V 'Guruguru'</li>
      <li className="collection__item">SS07 Purple</li>
      <li className="collection__item">AW07 EARMUFF MANIAC</li>
      <li className="collection__item">SS08 Summer Madness</li>
      <li className="collection__item">AW08 Unrealrealcolthes</li>
      <li className="collection__item">SS09 Grace(Neoboy & Poptonez)</li>
      <li className="collection__item">AW09 EARMUFF MANIAC</li>
      <li className="collection__item">SS10 Less But Better</li>
      <li className="collection__item">AW10 Avakareta Life</li>
      <li className="collection__item">SS11 Underman</li>
      <li className="collection__item">AW11 Mirror</li>
      <li className="collection__item">SS12 Open Strings</li>
      <li className="collection__item">AW13 ANATOMICOUTURE</li>
      <li className="collection__item">SS14 GODOG</li>
      <li className="collection__item">AW14 COLD BLOOD</li>
      <li className="collection__item">SS15 ADVENTURE</li>
      <li className="collection__item">AW15 NO (B)ORDERS</li>
      <li className="collection__item">SS16 THE GREATEST</li>
      <li className="collection__item">AW16 INSTANT CALM</li>
      <li className="collection__item">SS17 IMPROVISATION CONCEPTS</li>
      <li className="collection__item">AW17 BRAIN WASHED GENERATION</li>
      <li className="collection__item">SS18 SPIRITUAL NOISE</li>
      <li className="collection__item">AW18 ORDER - DISORDER</li>
      <li className="collection__item">SS19 THE NEW WARRIORS</li>
      <li className="collection__item">AW19 THE DROOGS</li>
      <li className="collection__item">SS20 I HOLD A BEAST,
AN ANGEL AND A MADMAN IN ME</li>
      <li className="collection__item">AW20 FALLEN MAN</li>
      <li className="collection__item">SS21 2020</li>
      <li className="collection__item">AW21 2021AW</li>
      <li className="collection__item">AW21 CREEP VERY</li>
      <li className="collection__item">SS22 ONCE IN A LIFETIME</li>
      <li className="collection__item">AW22 Psychopillia</li>
    </ul>
  )}
  </>
  )
}
export default Undercover