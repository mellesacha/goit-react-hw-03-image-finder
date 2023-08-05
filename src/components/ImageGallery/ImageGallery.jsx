import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({picture}) => {
    
    if (picture.length) {
         return (
       <ul className="gallery">{
           
            picture.map(({id, webformatURL, largeImageURL}) => {
                return (<ImageGalleryItem key={id} small={webformatURL} large={largeImageURL} />)
            }) 
        }
           
        </ul>
    );
    }
   
};

export default ImageGallery;

