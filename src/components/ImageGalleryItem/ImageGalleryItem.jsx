const ImageGalleryItem = ({id, small}) => {
    return (
        <li className="gallery-item">
            <img src={small} alt="" />
        </li>
    );
};

export default ImageGalleryItem;