import './LikesSection.css'
function LikesSection(props) {
    return <div className="likes-section">
        <span className="likes">{props.dogImage.likes} likes</span>
        <button className="like-button">♥</button>
    </div>
}
export default LikesSection