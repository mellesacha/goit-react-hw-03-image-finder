import { Component } from "react";
import Modal from "../Modal/Modal";

class ImageGalleryItem extends Component {

    state = {
        isModalOpen: false,
    }
   
    toggleModal = () => {
        this.setState(prevState => ({isModalOpen: !prevState.isModalOpen}))
    }
   
    render() {
        const { small, large } = this.props;
        return (<>
          <li className="gallery-item" onClick={this.toggleModal}>
                <img src={small} alt="" />
                {this.state.isModalOpen && <Modal largeImg={large} closeModal={this.toggleModal}/>}
            </li>
            </>
          
            
            

        
    )
    }
    
};

export default ImageGalleryItem;