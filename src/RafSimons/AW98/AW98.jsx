import Modal from "../../Modal/Modal.jsx"
function AW98(props) {
  const { isOpen, title, closeModal, openModal} = props;
  return(
    <>
    <li onClick={openModal} className="collection__item">{title}</li>
    <Modal
    title={title} 
    modalClose={closeModal} 
    modalOpen={isOpen}/>
    </>
  )
}
export default AW98