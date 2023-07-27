import { useEffect, useState } from "react"
import CocktailSingle from "./CocktailSingle"
import CocktailRandom from "./CocktailRandom"

const CocktailAll = () =>{

    const [myCocktails, setMyCocktails] = useState([])
    const [myRandomCocktail, setMyRandomCocktail] = useState([])

    const fetchRandomCocktail = async () =>{
        try{
            const resultRandomCocktail = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            const resultRandomCocktailJson = await resultRandomCocktail.json()
            setMyRandomCocktail(resultRandomCocktailJson.drinks[0])
        } catch (error) {
            // const arrorMsg = error
        }
    }

    const fetchAllCocktails = async () =>{
        try{
            const resultAllCocktails = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
            const resultCocktailsJson = await resultAllCocktails.json()
            setMyCocktails(resultCocktailsJson.drinks)
        } catch (error) {
            // const errorMsg = error
        }
    }

    useEffect(()=>{
        fetchAllCocktails()
    }, [])
    return(
        <div className="containerCocktailAll">
            <p> Voici tout les Cocktail visible sur notre Blog :</p>
            <ul>
                {myCocktails.map(cocktail => (
                    <CocktailSingle cocktail={cocktail}/>
                    ))}
            </ul>
            <p> Voici un cocktail random :</p>
            <a href="#blank" onClick={fetchRandomCocktail}>random cocktail</a>
            <ul>
                    <CocktailRandom myRandomCocktail={myRandomCocktail}/>
            </ul>
        </div>
    )
}

export default CocktailAll