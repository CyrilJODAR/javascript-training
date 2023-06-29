const CocktailRandom = ({cocktailPublished}) => {
    const random = Math.floor(Math.random()*cocktailPublished.length);
    const cocktailRandom = cocktailPublished[random]
    return(
        <div className="containerCocktailRandom">
            <p> Voici un Cocktail aléatoire visible sur notre Blog :</p>
            <ul>
                <li key={cocktailRandom.id} className="CocktailCard">
                    <h3>{cocktailRandom.name}</h3>
                    {cocktailRandom.ingredients.map(cocktailIngredients => <p>{cocktailIngredients}</p>)}
                    <h4>{cocktailRandom.price} $</h4>
                </li>
            </ul>
        </div>
    )
}
export default CocktailRandom