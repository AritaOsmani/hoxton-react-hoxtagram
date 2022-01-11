import { useEffect, useState } from 'react'
import './App.css'
import AddNewCardForm from './components/AddNewCardForm'
import ImageContainer from './components/ImageContainer/ImageContainer'
import Logo from './components/Logo/Logo'
import Search from './components/Search/Search'

function App() {
  const [dogImages, setDogImages] = useState([])
  const [editSelected, setEditSelected] = useState(false)
  const [search, setSearch] = useState('')

  function getDogsFromServer() {
    fetch('http://localhost:3000/images').then(res => res.json()).then(images => setDogImages(images))
  }
  useEffect(getDogsFromServer, [])
  function cardItemsToDisplay() {
    let cardItems = dogImages;
    if (search !== '') {
      cardItems = cardItems.filter(item => item.title.toUpperCase().includes(search.toUpperCase()))
    }
    return cardItems;
  }

  return (
    <div className="App">
      <Logo />
      <Search
        setSearch={setSearch}
      />
      <AddNewCardForm
        dogImages={dogImages}
        setDogImages={setDogImages}
      />
      {/* <!-- image cards --> */}
      <ImageContainer
        // dogImages={dogImages}
        dogImages={cardItemsToDisplay()}
        setDogImages={setDogImages}
        editSelected={editSelected}
        setEditSelected={setEditSelected}
      />
    </div>
  )
}

export default App
