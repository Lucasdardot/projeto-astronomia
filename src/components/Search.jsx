import Button from './Button'
import { useState } from "react";
import './Search.css'

function Search({setNasaData}){

    const APIKEY = "qdfgsb7ZHf2FE4pTLFJCycx1GyfFKboZ1Wm8ENVe"

    const [searchValue, setSearchValue] = useState("")
    console.log(searchValue)
    const handleSearch = async () => {
        if (searchValue) {
            try {
                const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&date=${searchValue}`)
                console.log(response)
                if(!response.ok){ //se deu falso
                    throw new Error("data não encontrada, digite novamente", response.status)
                }
                const data = await response.json()
                setNasaData(data)
                
              
                
            } catch (error) {
                console.error("Erro ao buscar dados", error.message)
                
            }
  
        } else {
            alert("Digite uma data válida")
        }
    }

    return(
        <div className="body">
            <h2>Foto do dia de Astronomia</h2>
            <p>Escolha uma data:</p>
            <input type="date" onChange={(e) => setSearchValue(e.target.value.toLowerCase())}/>
            <Button text={"Pesquisar"} handleSearch={handleSearch}/>
        </div>
        
    )
}

export default Search