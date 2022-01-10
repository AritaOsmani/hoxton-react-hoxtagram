import Comment from './Comment'
import './CommentsSection.css'

function CommentsSection(props) {
    return <ul className="comments">
        {props.dogImage.comments.map(comment =>
            <Comment
                comment={comment}
                key={comment.id}
            />)}

        {/* <li>And replace them with the real ones</li>
        <li>From the server</li> */}
    </ul>
}
export default CommentsSection