const CocktailLastThree = ({cocktailPublished}) =>{
    return(
        <div className="containerCocktailLastThree">
            <p> Voici les trois derniers Cocktail visible sur notre Blog :</p>
            <ul>
                {cocktailPublished.map((cocktail,ind)=> ind >= cocktailPublished.length-3 &&(
                    <li key={cocktail.id} className="CocktailCard">
                        <h3>{cocktail.name}</h3>
                        {cocktail.ingredients.map(cocktailIngredients => <p>{cocktailIngredients}</p>)}
                        <h4>{cocktail.price} $</h4>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CocktailLastThree