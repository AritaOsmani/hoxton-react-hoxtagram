import './LikesSection.css'
function LikesSection(props) {
    function increaseLikes(id, newLikes) {
        return fetch(`http://localhost:3000/images/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likes: newLikes })
        }).then(res => res.json())
    }

    return <div className="likes-section">
        <span className="likes">{props.dogImage.likes} likes</span>
        <button onClick={
            function () {
                const newLikes = props.dogImage.likes + 1;
                increaseLikes(props.dogImage.id, newLikes).then(res => {
                    const updated = [...props.dogImages];
                    const found = updated.find(item => item.id === res.id)
                    found.likes = res.likes;
                    props.setDogImages(updated)

                })
            }
        }
            className="like-button">♥</button>
    </div>
}
export default LikesSection