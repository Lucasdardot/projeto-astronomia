
function Button({text,handleSearch}){
    return(
        <button className='translate' onClick={handleSearch}>{text}</button>
    )
}

export default Button