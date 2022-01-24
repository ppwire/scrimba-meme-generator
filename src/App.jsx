import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import MemeImage from './components/MemeImage'
import memeData from './memeData'
import { useState } from 'react'
function App() {

  const [meme, setMeme] = useState({
    text1: '',
    text2: '',
    memeImg: 'http://i.imgflip.com/1bij.jpg'
  })

  const [allMemes, setAllMemes] = useState(memeData.data.memes)

  const getMemeHandler = (e) => {
    e.preventDefault()
    const random = Math.floor(Math.random() * allMemes.length)
    setMeme(prev=>({
      ...prev,memeImg:allMemes[random].url
    }))
  }

  return (
    <div className="app">
      <Header></Header>
      <main>
        <Form onClick={getMemeHandler}></Form>
        <MemeImage img={meme.memeImg}></MemeImage>
      </main>
    </div>
  )
}

export default App
