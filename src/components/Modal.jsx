// // components/Modal.js (Example Modal component)
// import { createPortal } from 'react-dom';


// const Modal = ({ isOpen, onClose, children }) => {//object of props
//   if (!isOpen) return null; // Don't render anything if the modal is closed

//   // The first argument is the content (JSX), the second is the target DOM node
//   return createPortal(
//     <div className="modal-overlay">
//       <div className="modal-content">
//         {children}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>,
//     document.getElementById('portal-root') // The target element
//   );
// };

// export default Modal;


import { createPortal } from "react-dom";

function Modal(props){

    if(!props.isOpen) return null;
    return(
        createPortal(
            <div className="modal-overlay-test">
                <div className="modal-content">
                    {props.children}
                    <p>{props.modalVal}</p>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>,
            document.getElementById('portal-root')
        )
    );
}

export default Modal;