function Edit(props) {
    function editComment(comment, newContent) {
        fetch(`http://localhost:3000/comments/${comment.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: newContent })
        })
        let updated = JSON.parse(JSON.stringify(props.dogImages));
        let foundElement = updated.find(target => target.id === comment.imageId);
        let foundCommentIndex = foundElement.comments.findIndex(target => target.id === comment.id)
        foundElement.comments[foundCommentIndex].content = newContent;
        props.setDogImages(updated)

    }
    return <form onSubmit={e => {
        e.preventDefault()
        const newContent = e.target.edit.value;
        editComment(props.comment, newContent);
        e.target.reset();
        props.setEditSelected(false)
    }} className="edit-form" action="">
        <input type="text" name="edit" placeholder="Enter new content...." />
        <button onClick={function () {
            props.setEditSelected(false);
        }} type='button'
            className="cancel-btn"
        >Cancel</button>
    </form>
}
export default Edit