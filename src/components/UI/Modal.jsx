import styles from './Modal.module.css'
import ReactDOM from 'react-dom'


const Backdrop = ({onHideCart}) => {
    return <div className={styles.backdrop} onClick={onHideCart}></div>
}

const ModalWindow = (props) => {
    return (<div className={styles.modal}>
                <div className={styles.content}>{props.children}</div>
            </div>)
}

// Portal Ref
const portalElement = document.querySelector('#overlays');

function Modal(props) {

  return (
    <>
        {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalElement)}
        {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </>
  )
}

export default Modal