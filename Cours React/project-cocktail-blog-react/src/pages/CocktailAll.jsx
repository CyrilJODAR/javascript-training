import { useEffect, useState } from "react"
import CocktailSingle from "./CocktailSingle"
import Header from "../component/Header"
import Footer from "../component/Footer"

const CocktailAll = () =>{

    const [myCocktails, setMyCocktails] = useState([])


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
        <>
            <Header />
            <div className="containerCocktailAll">
                <p> Voici tout les Cocktail visible sur notre Blog :</p>
                <ul>
                    {myCocktails.map(cocktail => (
                        <CocktailSingle cocktail={cocktail}/>
                        ))}
                </ul>
            </div>
            <Footer />
        </>
    )
}

export default CocktailAll