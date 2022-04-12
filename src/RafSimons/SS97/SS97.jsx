import Modal from "../../Modal/Modal";
function SS97(props) {
  const { title, closeModal, isOpen } =props;
  return(
    <>
    <Modal
    title={title}
    modalClose={closeModal} 
    modalOpen={isOpen}/>
    </>
  )
}
export default SS97