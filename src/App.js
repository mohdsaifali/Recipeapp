import React,{useState,useEffect} from 'react'
import './App.css'
import Recipe from './components/Recipe'
const App=()=>{
const APP_ID ='dc34792b'
const APP_KEY = '3eab1a651f78f58e8b394f905f3efa21'
const[recipes,setRecipes]= useState([])
const[search,setSearch] = useState(' ');
const [query,setQuery] = useState("momo")

const getRecipe= async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)

}
useEffect(()=>{
    getRecipe()
},[])

 const getSearch=(e)=>{
e.preventDefault()
 setQuery(search)
 getRecipe()
}


return(
    <div className='App'>
        <form className='search-form' onSubmit={getSearch}>
            <input type="text" className='search-bar' value={search} onChange={e=>setSearch(e.target.value)}/>
            <button type='submit' className='search-button'>Search</button>
        </form>
    <div className='recipe'>
        {recipes.map(rec=><Recipe
         key={rec.recipe.label}
         title={rec.recipe.label}
         calories={rec.recipe.calories}
         image={rec.recipe.image}
        ingredients={rec.recipe.ingredients}
        />)}
        
    </div>
    </div>

)
}

export default App