import './Search.css'
function Search(props) {
    return <div className="search-container">
        <h2>Search for a post</h2>
        <input onChange={(function (e) {
            const searchValue = e.target.value;
            props.setSearch(searchValue)
        })}
            type="text" name='val' placeholder="Enter title..." />
    </div>

}
export default Search