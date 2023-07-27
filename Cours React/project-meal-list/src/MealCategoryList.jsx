import { useEffect, useState } from "react"
import MealByCategories from "./MealByCategories";

const MealCategoryList = () =>{
    const [isShown, setIsShown] = useState(false)
    const [MealCategories, setMealCategories] = useState([]);
    const [MealClickedCategory, setMealClickedCategory] = useState([])
    const [CategoryCheck, setCategoryCheck] = useState([])
    const [loader, setLoader] = useState(false);
    const [loaderCategoryMeals, setLoaderCategoryMeals] = useState(false)

    const HandleClickCategoryMeals = async (clickedCategory) =>{
        
        if(isShown === false){
            setLoaderCategoryMeals(true)
        }
        try{
            const resultMealCategoriesClick = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${clickedCategory}`)
            const responseJson = await resultMealCategoriesClick.json()
            
            setMealClickedCategory(responseJson.meals)
            if(isShown === false){
                setCategoryCheck(clickedCategory)
                setIsShown(!isShown)
            } else {
                setCategoryCheck([])
                setIsShown(!isShown)
            }
            setLoaderCategoryMeals(false)
        } catch (error) {
            // const msgError = error
        }
        setLoaderCategoryMeals(false)
    }

    const fetchMealCategories = async () =>{
        setLoader(true)
        try{

            const resultMealCategories = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            const responseJson = await resultMealCategories.json()
    
            setMealCategories(responseJson.categories)
        } catch (error) {
            // const msgError = error
        }
        setLoader(false)
    }

    useEffect(() =>{
        fetchMealCategories()
    }, [])
    
    return(
        <section>
        { !loader ?
        MealCategories.map((category) => (
            <>
              <div key={category.idCategory} className="cardCategory">
                <div className="cardCategoryHeader">
                    <h1>{`${category.strCategory} =>`} </h1>
                    <img src={category.strCategoryThumb} alt={category.strCategory} className="imgCategory"></img>
                    <a href="#blank" onClick={()=>{HandleClickCategoryMeals(category.strCategory)}}>Show meals</a>
                </div>
                <p>{category.strCategoryDescription}</p>
              </div>
              {CategoryCheck === category.strCategory &&
               <MealByCategories loaderCategoryMeals={loaderCategoryMeals} MealClickedCategory={MealClickedCategory}/>}
            </>
            )
          ) : <h2>Loading ...</h2>
        }
      </section>
    )
}

export default MealCategoryList;