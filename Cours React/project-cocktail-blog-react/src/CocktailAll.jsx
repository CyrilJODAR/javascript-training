import CocktailSingle from "./CocktailSingle"

const CocktailAll = ({cocktailPublished}) =>{
    return(
        <div className="containerCocktailAll">
            <p> Voici tout les Cocktail visible sur notre Blog :</p>
            <ul>
                {cocktailPublished.map(cocktail => (
                    <CocktailSingle cocktail={cocktail}/>
                    ))}
            </ul>
        </div>
    )
}

export default CocktailAll