import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {
  const api = axios.create({baseURL:'https://api.quotable.io'});
  const [quote_text, setQuote] = useState("your quote here!");
  const [quote_autor, setAutor] = useState("your quote here!");


  const handleGenerate = () => {
    api.get("/quotes/random").then(response => {
      setQuote(response.data[0].content);
      setAutor(response.data[0].author);
      console.log(response);
    })
  }

  return (
  <div>
    <div className="quote">
      <a className='quotetxt'>{quote_text}</a>
      <a> - {quote_autor}</a>
    </div>
    <button type='button' onClick={()=>handleGenerate()}>generate random quote</button>
  </div>
  )
}

export default App
