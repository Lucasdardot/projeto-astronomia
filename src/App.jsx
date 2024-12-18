
import './App.css'
import { useState } from "react"
import Result from './components/Result.jsx'
import Search from './components/Search.jsx'

function App() {
  const [nasaData, setNasaData] = useState(null)
  console.log(nasaData)
  return (
    <>
    <Search setNasaData={setNasaData}/>
     <Result nasaData={nasaData}/>
    </>
   
    
  )
}

//chave API: qdfgsb7ZHf2FE4pTLFJCycx1GyfFKboZ1Wm8ENVe

export default App
