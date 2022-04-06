function RickOwens(props) {
  const {isRickOpen, rickActive, RickClick} = props;
  return(
    <>
    <li className={rickActive} onClick={RickClick}>Rick Owens</li>
    {isRickOpen && (
      <ul className="collection collection__rick">
        <li className="collection__item">FW98 MONSTERS</li>
        <li className="collection__item">SS99 POWDER</li>
        <li className="collection__item">FW99 HYDRA</li>
        <li className="collection__item">SS00 SWANS</li>
        <li className="collection__item">FW00 DUST</li>
        <li className="collection__item">SS01 ELEKTRA</li>
        <li className="collection__item">FW01 SLAB</li>
        <li className="collection__item">SS02 VAPOR</li>
        <li className="collection__item">FW02 SPARROWS</li>
        <li className="collection__item">SS03 SUCKERBALL</li>
        <li className="collection__item">FW03 TRUCKER</li>
        <li className="collection__item">SS04 CITROEN</li>
        <li className="collection__item">FW04 QUEEN</li>
        <li className="collection__item">SS05 SCORPIO</li>
        <li className="collection__item">FW05 MOOG</li>
        <li className="collection__item">SS06 TUNGSTEN</li>
        <li className="collection__item">FW06 DUSTULATOR</li>
        <li className="collection__item">SS07 WISHBONE</li>
        <li className="collection__item">FW07 EXPLODER</li>
        <li className="collection__item">SS08 CREATCH</li>
        <li className="collection__item">FW08 STAG</li>
        <li className="collection__item">SS09 STRUTTER</li>
        <li className="collection__item">FW09 CRUST</li>
        <li className="collection__item">SS10 RELEASE</li>
        <li className="collection__item">FW10 GLEAM</li>
        <li className="collection__item">SS11 ANTHEM</li>
        <li className="collection__item">FW11 LIMO</li>
        <li className="collection__item">SS12 NASKA</li>
        <li className="collection__item">FW12 MOUNTAIN</li>
        <li className="collection__item">SS13 ISLAND</li>
        <li className="collection__item">FW13 PLINTH</li>
        <li className="collection__item">FW14 MOODY</li>
        <li className="collection__item">SS15 FAUN</li>
        <li className="collection__item">FW15 SPHINX</li>
        <li className="collection__item">SS16 CYCLOPS</li>
        <li className="collection__item">FW16 MASTODON</li>
        <li className="collection__item">SS17 WALRUS</li>
        <li className="collection__item">FW17 GLITTER</li>
        <li className="collection__item">SS18 DIRT</li>
        <li className="collection__item">FW18 SISYPHUS</li>
        <li className="collection__item">SS19 BABEL</li>
        <li className="collection__item">FW19 LARRY</li>
        <li className="collection__item">SS20 TECUATL</li>
        <li className="collection__item">FW20 PERFORMA</li>
        <li className="collection__item">SS21 PHLEGETHON</li>
        <li className="collection__item">FW21 GETHSEMANE</li>
        <li className="collection__item">SS22 FOGACHINE</li>
        <li className="collection__item">FW22 STROBE</li>
      </ul>
    )}
    </>
    )
}
export default RickOwens