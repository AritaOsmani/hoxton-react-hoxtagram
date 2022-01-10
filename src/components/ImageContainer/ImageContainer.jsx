import ImageCard from './ImageCard'
import './ImageContainer.css'
function ImageContainer(props) {
    return <section className="image-container">
        {/* <!-- This is the HTML for each card. Use the following HTML as reference to build your React components --> */}
        {props.dogImages.map(dogImage =>
            <ImageCard
                key={dogImage.id}
                dogImage={dogImage}
            />)}

    </section>
}
export default ImageContainer