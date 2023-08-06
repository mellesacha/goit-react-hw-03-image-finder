import { Component } from "react";
import { createPortal } from "react-dom";

import cl from "./Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component{

    componentDidMount() {
        window.addEventListener('keydown', this.closeByEsc)
    }

    componentWillUnmount() {
         window.removeEventListener('keydown', this.closeByEsc)
    }

    closeByEsc = (e) => {
        if (e.key === "Escape") {
            this.props.closeModal()
        }
    }

    render() {
        const { largeImg, closeModal } = this.props;
        return createPortal(
            <div className={cl.overlay}>
                <div className={cl.modal}  onClick={closeModal}>
                    <img src={largeImg} alt="" />
                </div>
            </div> , modalRoot
        )
    }
};

export default Modal;