import './CommentForm.css'
function CommentForm(props) {
    function addNewComment(imageId, content) {
        return fetch(`http://localhost:3000/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: content, imageId: imageId })
        }).then(res => res.json())
    }
    return <form onSubmit={e => {
        e.preventDefault();
        const content = e.target.content.value;

        addNewComment(props.dogImage.id, content).then(res => {
            const updated = [...props.dogImages];
            let index = updated.findIndex(item => item.id === props.dogImage.id)
            updated[index].comments.push(res)

            props.setDogImages(updated)
        });
        e.target.reset();
    }}

        className='comment-form' action="">
        <input name='content' type="text" className="comment-input" placeholder="Add a comment..." />
        <button type='submit' className="comment-button">POST</button>
    </form>
}
export default CommentForm