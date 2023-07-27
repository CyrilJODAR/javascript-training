const MealByCategories = ({ MealClickedCategory, loaderCategoryMeals}) =>{

    return (
        <>
            {loaderCategoryMeals ? (
                <h2>loading ...</h2>
            ) : (
                <section className="cardMealSection">
                    {MealClickedCategory.map((meal) => (
                        <div className="cardMeal">
                            <h1>{meal.strMeal}</h1>
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="imgMeal"></img>
                        </div>
                        ))
                    }
                </section> 
            )}

          
        </>
    )
}

export default MealByCategories;