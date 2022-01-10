import { useEffect, useState } from 'react'
import './App.css'
import AddNewCardForm from './components/AddNewCardForm'
import ImageContainer from './components/ImageContainer/ImageContainer'
import Logo from './components/Logo/Logo'

function App() {
  const [dogImages, setDogImages] = useState([])

  function getDogsFromServer() {
    fetch('http://localhost:3000/images').then(res => res.json()).then(images => setDogImages(images))
  }
  useEffect(getDogsFromServer, [])

  return (
    <div className="App">
      <Logo />
      <AddNewCardForm
        dogImages={dogImages}
        setDogImages={setDogImages}
      />
      {/* <!-- image cards --> */}
      <ImageContainer
        dogImages={dogImages}
        setDogImages={setDogImages}
      />
    </div>
  )
}

export default App
