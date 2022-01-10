import { useEffect, useState } from 'react'
import './App.css'
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

      {/* <!-- image cards --> */}
      <ImageContainer
        dogImages={dogImages}
      />
    </div>
  )
}

export default App