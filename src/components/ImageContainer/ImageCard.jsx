import CommentsSection from './CommentsSection'
import './ImageCard.css'
import ImageCardImage from './ImageCardImage'
import ImageCardTitle from './ImageCardTitle'
import LikesSection from './LikesSection'
function ImageCard(props) {
    return <article className="image-card">
        <ImageCardTitle
            dogImage={props.dogImage}
        />
        <ImageCardImage
            dogImage={props.dogImage}
        />
        <LikesSection
            dogImage={props.dogImage}
        />
        <CommentsSection
            dogImage={props.dogImage}
        />
    </article>
}
export default ImageCard