import RafSimons from "../RafSimons/RafSimons"
import Undercover from "../Undercover/Undercover"

function Designers(props) {
  return(
    <ul className="designers__list">
      <RafSimons {...props}/>
      <Undercover {...props}/>
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