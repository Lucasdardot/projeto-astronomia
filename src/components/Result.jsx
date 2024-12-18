import Button from './Button'
import './Result.css'


function Result ({nasaData}) {
  if(nasaData){
    
    const imagem = nasaData.url
    const descricao = nasaData.explanation
    const titulo = nasaData.title
  return (
    
    <div className="body">
      <h2 className='tile'>{titulo}</h2>
      <img className='image' src={imagem} alt="" />
      <div className="description">{descricao}</div>

      
    </div>
    

  )
  }
  
}

export default Result