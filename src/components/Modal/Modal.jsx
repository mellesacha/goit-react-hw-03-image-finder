import { Component } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";

import {Overlay, ModalView } from "./Modal.styled";

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
        const { largeImg, closeModal, tag } = this.props;
        return createPortal(
            <Overlay>
                <ModalView  onClick={closeModal}>
                    <img src={largeImg} alt="" />
                </ModalView>
            </Overlay> , modalRoot
        )
    }
};

export default Modal;

Modal.propTypes = {
    largeImg: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    tag: PropTypes.string.isRequired
}