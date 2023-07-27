const CocktailSingle = ({cocktail}) =>{
      let myIngredients = []
      for (const key in cocktail) {
            if (key.includes('strIngredient') && cocktail[key] != null){
                  myIngredients.push(cocktail[key]) 
            }
      }
      return(
            <li key={cocktail.idDrink} className="CocktailCard">
                <h3>{cocktail.strDrink}</h3>
                {myIngredients.map(cocktailIngredients => <p>{cocktailIngredients}</p>)}
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            </li>
      )
}
export default CocktailSingle