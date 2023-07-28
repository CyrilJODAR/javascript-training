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
            <main className='myMain'>
                <section className='sectionCocktails'>
                    <div className="containerCocktailAll">
                        <p> Voici tout les Cocktails visible sur notre Blog :</p>
                        <ul>
                            {myCocktails != null &&
                            myCocktails.map(cocktail => (
                                <CocktailSingle cocktail={cocktail}/>
                                ))}
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CocktailAll