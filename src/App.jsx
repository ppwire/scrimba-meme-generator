import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import MemeImage from './components/MemeImage'
import memeData from './memeData'
import { useEffect, useState } from 'react'
function App() {

  const [meme, setMeme] = useState({
    text1: '',
    text2: '',
    memeImg: 'http://i.imgflip.com/1bij.jpg'
  })

  const [allMemes, setAllMemes] = useState()

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`).then(res => res.json()).then(result => setAllMemes(result.data.memes))
  }, [])

  const getMemeHandler = (e) => {
    e.preventDefault()
    const random = Math.floor(Math.random() * allMemes.length)
    console.log(allMemes)
    setMeme(prev => ({
      ...prev, memeImg: allMemes[random].url
    }))
  }

  const onChange = (e) => {
    const { value, name } = e.target
    setMeme(prev => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <div className="app">
      <Header></Header>
      <main>
        <Form onClick={getMemeHandler} haddleForm={onChange} formData={meme}></Form>
        <MemeImage img={meme.memeImg} memeText={meme}></MemeImage>
      </main>
    </div>
  )
}

export default App
