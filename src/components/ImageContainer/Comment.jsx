function Comment(props) {
    function deleteComment(comment) {
        fetch(`http://localhost:3000/comments/${comment.id}`, {
            method: 'DELETE'
        })
        let updated = JSON.parse(JSON.stringify(props.dogImages));

        let foundIndex = updated.findIndex(target => target.id === comment.imageId)

        let newComments = updated[foundIndex].comments.filter(target => target.id !== comment.id);
        updated[foundIndex].comments = newComments;
        props.setDogImages(updated);
    }
    return <div className="comment-content-buttons">
        <li>{props.comment.content}</li>
        <button onClick={function () {
            props.setEditSelected(true)
        }} className="edit-btn">Edit</button>
        <button onClick={
            function () {
                deleteComment(props.comment)
            }
        } className="delete-btn">Delete</button>
    </div>

}
export default Comment