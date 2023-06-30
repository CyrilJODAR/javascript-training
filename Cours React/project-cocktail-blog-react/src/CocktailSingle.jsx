const CocktailSingle = ({cocktail}) =>{
      return(
            <li key={cocktail.id} className="CocktailCard">
                <h3>{cocktail.name}</h3>
                {cocktail.ingredients.map(cocktailIngredients => <p>{cocktailIngredients}</p>)}
                <h4>{cocktail.price} $</h4>
            </li>
      )
}
export default CocktailSingle