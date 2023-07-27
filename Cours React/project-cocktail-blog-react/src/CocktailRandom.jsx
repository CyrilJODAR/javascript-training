const CocktailRandom = ( {myRandomCocktail} ) =>{
    return (
        <li key={myRandomCocktail.idDrink} className="CocktailCard">
            <h3>{myRandomCocktail.strDrink}</h3>
            <img src={myRandomCocktail.strDrinkThumb} alt={myRandomCocktail.strDrink} />
        </li>
    )
}

export default CocktailRandom;