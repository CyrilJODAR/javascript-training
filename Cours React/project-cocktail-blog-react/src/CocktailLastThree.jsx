import CocktailSingle from "./CocktailSingle"

const CocktailLastThree = ({cocktailPublished}) =>{
    const slicedCocktails = cocktailPublished.slice(-3)
    return(
        <div className="containerCocktailLastThree">
            <p> Voici les trois derniers Cocktail visible sur notre Blog :</p>
            <ul>
                {slicedCocktails.map((cocktail)=>(
                    <CocktailSingle cocktail={cocktail}/>
                ))}
            </ul>
        </div>
    )
}
export default CocktailLastThree