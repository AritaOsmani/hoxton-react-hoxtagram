import Comment from './Comment'
import './CommentsSection.css'
import Edit from './Edit'

function CommentsSection(props) {
    return <ul className="comments">
        {props.dogImage.comments.map(comment => {
            return props.editSelected &&
                <Edit
                    comment={comment}
                    dogImages={props.dogImages}
                    setDogImages={props.setDogImages}
                    setEditSelected={props.setEditSelected}
                    editSelected={props.editSelected}
                /> ||
                <Comment
                    comment={comment}
                    key={comment.id}
                    dogImage={props.dogImage}
                    dogImages={props.dogImages}
                    setDogImages={props.setDogImages}
                    setEditSelected={props.setEditSelected}
                />
        })
        }
        {/* {props.editSelected && <Edit /> ||
            props.dogImage.comments.map(comment => {
                return props.editSelected && <Edit /> ||
                    <Comment
                        comment={comment}
                        key={comment.id}
                        dogImage={props.dogImage}
                        dogImages={props.dogImages}
                        setDogImages={props.setDogImages}
                        setEditSelected={props.setEditSelected}
                    />
            })
        } */}

        {/* <li>And replace them with the real ones</li>
        <li>From the server</li> */}
    </ul>
}
export default CommentsSection