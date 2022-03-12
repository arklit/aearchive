
function Modal(props) {
  const {modalOpen, modalClose, title} = props;
  return (
  <section className={`modal ${modalOpen ? 'modal_visible' : ''}`}>
    <div className="modal__section">
      <div className="modal__header">
        <button onClick={modalClose} className="modal__close">←</button>
        <p className="modal__name">{title}</p>
      </div>
      <div className="modal__items">
         {props.children}
      </div>
    </div>
  </section>
)
}
export default Modal