import CocktailSingle from "./CocktailSingle"

const RhumCocktails = ({cocktailPublished}) =>{
    return(
        <div className="containerCocktailAll">
            <p> Voici tout les Cocktail visible avec du Rhum sur notre Blog :</p>
            <ul>
                {cocktailPublished.map(cocktail => cocktail.ingredients.includes("Rhum")&&(
                    <CocktailSingle cocktail={cocktail}/>
                ))}
            </ul>
        </div>
    )
}

export default RhumCocktails