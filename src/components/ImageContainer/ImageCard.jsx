import CommentForm from './CommentForm'
import CommentsSection from './CommentsSection'
import './ImageCard.css'
import ImageCardImage from './ImageCardImage'
import ImageCardTitle from './ImageCardTitle'
import LikesSection from './LikesSection'
function ImageCard(props) {
    return <article className="image-card">
        <ImageCardTitle
            dogImage={props.dogImage}
            dogImages={props.dogImages}
            setDogImages={props.setDogImages}
        />
        <ImageCardImage
            dogImage={props.dogImage}
        />
        <LikesSection
            dogImage={props.dogImage}
            dogImages={props.dogImages}
            setDogImages={props.setDogImages}
        />
        <CommentsSection
            dogImage={props.dogImage}
            dogImages={props.dogImages}
            setDogImages={props.setDogImages}
        />
        <CommentForm
            dogImage={props.dogImage}
            setDogImages={props.setDogImages}
            dogImages={props.dogImages}
        />
    </article>
}
export default ImageCard