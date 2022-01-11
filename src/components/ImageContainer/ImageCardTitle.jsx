import './ImageCardTitle.css'
function ImageCardTitle(props) {

    function deletePost(dogImage) {
        fetch(`http://localhost:3000/images/${dogImage.id}`, {
            method: 'DELETE'

        })
        let updated = JSON.parse(JSON.stringify(props.dogImages));
        updated = updated.filter(image => image.id !== dogImage.id)
        props.setDogImages(updated);
    }
    return <div className='card-title-button'>
        <h2 className="title">{props.dogImage.title}</h2>
        <button onClick={function () {
            deletePost(props.dogImage);
        }}
            className='delete-btn'>Delete</button>
    </div>

}
export default ImageCardTitle