import Modal from "../../Modal/Modal";
function SS97(props) {
  const { openModal, title, closeModal, isOpen } =props;
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
export default SS97