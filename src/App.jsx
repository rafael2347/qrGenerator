import { useState } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [img, setImg] = useState(null)

  function enviar() {
    let src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`
    setImg(<iframe src={src}></iframe>)
    setUrl('')
  }

  return (
    <div className='main'>
      <h1>Generador de códigos QR</h1>
      <input onChange={(e) => {
        setUrl(e.target.value)
      }} value={url}></input>
      <button onClick={enviar}>Enviar</button>
      <button onClick={() => {
        setImg(null)
      } }>Limpar</button>
      {
        img ? img : ''
      }
    </div>
  )
}

export default App
