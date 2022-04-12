import Modal from "../../Modal/Modal.jsx"
function AW96(props) {
  const { isOpen, title, closeModal} = props;
  return(
    <>
    <Modal
    title={title} 
    modalClose={closeModal} 
    modalOpen={isOpen}/>
    </>
  )
}
export default AW96