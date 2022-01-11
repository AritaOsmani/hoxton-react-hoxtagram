import Comment from './Comment'
import './CommentsSection.css'

function CommentsSection(props) {
    return <ul className="comments">
        {props.dogImage.comments.map(comment =>
            <Comment
                comment={comment}
                key={comment.id}
                dogImage={props.dogImage}
                dogImages={props.dogImages}
                setDogImages={props.setDogImages}
            />)}

        {/* <li>And replace them with the real ones</li>
        <li>From the server</li> */}
    </ul>
}
export default CommentsSection