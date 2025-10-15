import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {
  const api = axios.create({baseURL:'https://api.quotable.io'});
  const [quote_text, setQuote] = useState("your quote here!");
  const [quote_autor, setAutor] = useState("your quote here!");
  const [first, setFirst] = useState(true);

  const handleGenerate = () => {
    api.get("/random").then(response => {
      if (response) {
        console.log(response.data)
        setQuote(response.data.content);
        setAutor(response.data.author);
        console.log(response);
      }  
    })
  }

  useEffect(()=>{
    if(first) handleGenerate();
    setFirst(false);
  })

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
