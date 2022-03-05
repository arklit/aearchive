function Designers(props) {
    const { handleChangeRadio, checked} = props;
    function onChange(event) {
        handleChangeRadio(event.target.checked);
    }
    return(
        <ul className="designers__list">
          <li  type="checkbox" onChange={handleChangeRadio} checked={checked} className="designers__item" onClick={props.handleClick}>Raf Simons</li>
          <li className="designers__item">Unsercover by Jun Takahashi</li>
          <li className="designers__item">Rick Owens</li>
          <li className="designers__item">NUMBER (N)INE</li>
          <li className="designers__item">TAKAHIROMIYASHITA The Soloist</li>
          <li className="designers__item">Carol Christian Poell</li>
          <li className="designers__item">Kiko Kostadinov</li>
          <li className="designers__item">Maison Margiela</li>
          <li className="designers__item">Comme des Garçons</li>
          <li className="designers__item">Dries Van Noten</li>
          <li className="designers__item">Visvim</li>
          </ul>
    )
}
export default Designers