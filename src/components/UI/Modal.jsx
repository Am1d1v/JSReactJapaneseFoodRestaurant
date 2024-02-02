import styles from './Modal.module.css'
import ReactDOM from 'react-dom'


const Backdrop = (props) => {
    return <div className={styles.backdrop}></div>
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
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </>
  )
}

export default Modal