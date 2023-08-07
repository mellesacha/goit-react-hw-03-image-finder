import { Component } from "react";
import Modal from "../Modal";
import PropTypes from 'prop-types';
import {GalleryItem, Image} from "./ImageGalleryItem.styled"

class ImageGalleryItem extends Component {

    state = {
        isModalOpen: false,
    }
   
    toggleModal = () => {
        this.setState(prevState => ({isModalOpen: !prevState.isModalOpen}))
    }
   
    render() {
        const { small, large, tag } = this.props;
        return (
          <GalleryItem onClick={this.toggleModal}>
                <Image src={small} alt={tag} />
                {this.state.isModalOpen && <Modal largeImg={large} closeModal={this.toggleModal} tag={tag } />}
            </GalleryItem> 
    )
    }
    
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    small: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
}