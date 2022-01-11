import './AddNewCardForm.css'
function AddNewCardForm(props) {
    function addNewPost(title, url) {
        return fetch('http://localhost:3000/images', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, image: url, comments: [], likes: 0 })
        }).then(res => res.json())
    }
    return <article className='new-post-article'>
        <h1 className='new-post-title'>New Post</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            const titleInput = e.target.title.value;
            const urlInput = e.target.url.value;
            addNewPost(titleInput, urlInput).then(res => {
                const updated = [...props.dogImages]
                updated.unshift(res);
                props.setDogImages(updated)
            })
            e.target.reset()
        }}
            action="">
            <input name='title' className='title-input' type="text" placeholder="Add a title..." />
            <input name='url' className="url-input" type="text" placeholder="Add an image url..." />
            <button className="submit-btn" type='submit'>POST</button>
        </form>
    </article>
}
export default AddNewCardForm