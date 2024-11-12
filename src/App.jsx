import { useState,useEffect } from 'react'
import axios from 'axios'
import "./style/style.scss"

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect((e)=>{
    axios.get("https://my-json-server.typicode.com/tahsincanpolat/pokedex/pokemons")
    .then((response)=>{
      if(response.status === 200){
        setPokemons(response.data)
      }
    })
      .catch((e)=>{
        console.log(e)
    })
  },[])
  return (
    <>
    
      <div>
        {
          pokemons.map((pokemon,key)=>{
            return(
              <div key={key} className='Pokemons-Card'>
                     <img src={pokemon.image.thumbnail} alt={pokemon.name} />
                     <p>{pokemon.name}</p>
                     <div className='ButtonContainer'>
                     <button>{pokemon.type}</button>
                     <button>{pokemon.type}</button>
                     </div>
              </div>
                
             
            )
          })
        }
      </div>

    </>
  )
}

export default App
