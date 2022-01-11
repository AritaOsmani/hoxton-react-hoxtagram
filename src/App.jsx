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

  // function deletePost(dogImage) {
  //   fetch(`http://localhost:3000/images/${dogImage.id}`, {
  //     method: 'DELETE'

  //   })
  //   let updated = JSON.parse(JSON.stringify(dogImages));
  //   updated = updated.filter(image => image.id !== dogImage.id)
  //   setDogImages(updated);
  // }
  // function deleteComment(dogImage) {
  //   fetch(`http://localhost:3000/comments/${dogImage.comments.id}`, {
  //     method: 'DELETE'
  //   })
  //   let updated = JSON.parse(JSON.stringify(dogImages));
  //   updated = updated.filtter(target => target.comments.id !== dogImage.comments.id);
  //   setDogImages(updated);
  // }
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
