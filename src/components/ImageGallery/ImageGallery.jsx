import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({picture}) => {
    
    if (picture.length) {
         return (
       <Gallery>{
           
            picture.map(({id, webformatURL, largeImageURL, tags}) => {
                return (<ImageGalleryItem key={id} small={webformatURL} large={largeImageURL} tag={ tags}/>)
            }) 
        }
           
        </Gallery>
    );
    }
   
};

export default ImageGallery;

ImageGallery.propTypes = {
    picture: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired
    })).isRequired
}

