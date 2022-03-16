import { useState } from "react";
import Modal from "../../Modal/Modal";

function SS97() {
  const title = 'SS97 How To Talk To Your Teen';
  const [isOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

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