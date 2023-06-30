import CocktailSingle from "./CocktailSingle";

const CocktailRandom = ({cocktailPublished}) => {
    const random = Math.floor(Math.random()*cocktailPublished.length);
    const cocktail = cocktailPublished[random]
    return(
        <div className="containerCocktailRandom">
            <p> Voici un Cocktail aléatoire visible sur notre Blog :</p>
            <ul>
                 <CocktailSingle cocktail={cocktail}/>
            </ul>
        </div>
    )
}
export default CocktailRandom