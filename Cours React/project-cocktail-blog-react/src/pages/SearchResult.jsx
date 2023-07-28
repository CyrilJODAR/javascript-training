import { useSearchParams } from "react-router-dom"
import Footer from "../component/Footer"
import Header from "../component/Header"
import { useEffect, useState } from "react"
import CocktailSingle from "./CocktailSingle"

const SearchResult = () =>{
    
    const [searchParams] = useSearchParams()
    const mySearch = searchParams.get("search");
    const [myCocktailsSearch, setMyCocktailsSearch] = useState([])
    
    const FetchSearchedCocktails = async() =>{
        try{
            const resultFetchSearch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${mySearch}`)
            const resultFetchSearchJson = await resultFetchSearch.json()
            setMyCocktailsSearch(resultFetchSearchJson.drinks)
        } catch (error) {
            // const errorMsg = error
        }
    }
    
    useEffect(()=>{
        FetchSearchedCocktails()
    },[mySearch])

    return(
        <>
        <Header/>
        <main className='myMain'>
                <section className='sectionCocktails'>
                    <div className="containerCocktailAll">
                        <p> Voici tout les Cocktails visible sur notre Blog respectant votre recherche :</p>
                        <ul>
                            {myCocktailsSearch != null ?
                            myCocktailsSearch.map(cocktail => (
                                <CocktailSingle cocktail={cocktail}/>
                                )) : <h3>aucun cocktail trouvé correspondant à la recherche suivante :  {mySearch}</h3> }
                        </ul>
                    </div>
                </section>
            </main>
        <Footer />
        </>
    )
}

export default SearchResult