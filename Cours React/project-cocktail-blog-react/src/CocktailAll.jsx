const CocktailAll = ({cocktailPublished}) =>{
    return(
        <div className="containerCocktailAll">
            <p> Voici tout les Cocktail visible sur notre Blog :</p>
            <ul>
                {cocktailPublished.map(cocktail => (
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

export default CocktailAll