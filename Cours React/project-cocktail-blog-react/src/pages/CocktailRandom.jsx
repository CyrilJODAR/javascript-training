import { useEffect, useState } from "react"
import CocktailSingle from "./CocktailSingle"
import Header from "../component/Header"
import Footer from "../component/Footer"

const CocktailRandom = () =>{
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

    useEffect(()=>{
        fetchRandomCocktail()
    }, [])

    return (
        <>
            <Header />
            <main className='myMain'>
                <section className='sectionCocktails'>
                    <div className="containerCocktailAll">
                        <a href="#blank" onClick={fetchRandomCocktail}>random cocktail</a>
                         <p> Voici un cocktail random :</p>
                        <ul>
                          <CocktailSingle cocktail={myRandomCocktail}/>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CocktailRandom;