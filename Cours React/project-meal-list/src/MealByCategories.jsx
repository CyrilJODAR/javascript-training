const MealByCategories = ({ MealClickedCategory }) =>{
    return (
        <>
            {MealClickedCategory.map((meal) => (
                <div className="cardMeal">
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="imgMeal"></img>
                </div>
                ))
            }
        </>
    )
}

export default MealByCategories;