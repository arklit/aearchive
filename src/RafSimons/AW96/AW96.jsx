import Modal from "../../Modal/Modal.jsx"
import image1 from '../../images/rafsimons/aw96/aw96-1.jpg'
import image2 from '../../images/rafsimons/aw96/aw96-2.jpg'
import image3 from '../../images/rafsimons/aw96/aw92-3.jpg'
import image4 from '../../images/rafsimons/aw96/aw96-4.jpg'
import image5 from '../../images/rafsimons/aw96/aw96-5.jpg'
import image6 from '../../images/rafsimons/aw96/aw96-6.jpg'
import image7 from '../../images/rafsimons/aw96/aw96-7.jpg'
import image8 from '../../images/rafsimons/aw96/aw96-8.jpg'
function AW96(props) {
  const { isOpen, title, closeModal} = props;
  return(
    <>
    <Modal 
    title={title} 
    modalClose={closeModal} 
    modalOpen={isOpen}>
      <img className="modal__item"src={image1} alt="aw96-1"/>
      <img className="modal__item"src={image2} alt="aw96-2"/>
      <img className="modal__item"src={image3} alt="aw96-3"/>
      <img className="modal__item"src={image4} alt="aw96-4"/>
      <img className="modal__item"src={image5} alt="aw96-5"/>
      <img className="modal__item"src={image6} alt="aw96-6"/>
      <img className="modal__item"src={image7} alt="aw96-7"/>
      <img className="modal__item"src={image8} alt="aw96-8"/>

    </Modal>
    </>
  )
}
export default AW96