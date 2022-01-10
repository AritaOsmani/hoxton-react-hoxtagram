import './ImageCardImage.css'
function ImageCardImage(props) {
    return <img src={props.dogImage.image} className="image" />
}
export default ImageCardImage