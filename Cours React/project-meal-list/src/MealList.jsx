import { useEffect, useState } from "react"

const MealList = () =>{
  const [mealList, setMealList] = useState([]);

    const fetchSearchedMeal = async (event) =>{
      event.preventDefault()
      let searchedMeals = event.target.searchValue.value
      try{
        const resultSearchedMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeals}`)
        const responseJson = await resultSearchedMeals.json()

        setMealList(responseJson.meals)
      } catch (error) {
        // const msgError = error
      }
    }

    const fetchMealList = async () =>{
      try{
        const resultMealList = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        const responseJson = await resultMealList.json()

        setMealList(responseJson.meals)
      } catch (error) {
        // const msgError = error
      }
    }

useEffect(() =>{
  fetchMealList()
}, [])

    return(
      <>
        <section>
          <form onSubmit={fetchSearchedMeal}>
            <h3>search a meal here :</h3>
            <input name="searchValue" type="text" className="searchBar" placeholder="type a meal name"/>
          </form>
        </section>
        <section>
          {mealList.map((meal) => (
            <div key={meal.idMeal} className="cardMeal">
                  <h1>{meal.strMeal}</h1>
                  <img src={meal.strMealThumb} alt={meal.strMeal} className="imgMeal"></img>
                </div>
              )
              )}
        </section>
      </>
    )
}

export default MealList