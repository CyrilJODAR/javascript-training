// get elements from DOM to assign them
const btn = document.querySelector('.btnAddArticle')
const btnRemove = document.querySelector('.btnRemoveArticle')
const main = document.querySelector('main')
const btnRemoveAll = document.querySelector('.btnRemoveAllArticle')
let count = 1


const createNodeElements = (tagType,Text,myObject) =>{
    // SET PATERN DOM ELEMENT
    // create the element
    const createNodeElement = document.createElement(tagType)
    // add an attribute if needed
    for (n in myObject) {
        createNodeElement.setAttribute(n,myObject[n])
    }
    // add text content if needed with an optional parameter
    createNodeElement.textContent = Text
    // return the new created element (DOM element ex: <div class="myArticle"></div>)
    return createNodeElement
}
// add and event on my button which adds an article
btn.addEventListener('click', async () =>{
    // Call fetch async to the URL of the API
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
    // check if error ? Yes -> throw error status : continue ou exec
    if(!response.ok) throw new Error(`Error : ${response.status}`)
    // convert json of data from API to JS object
    const data = await response.json()

    // for each of the meals, create an element where we add datas from the API such as the title, thumbnail...
    data.meals.forEach(element =>{
        myNodeContainer = createNodeElements("h1","",{"class": "myArticle"})
        main.appendChild(myNodeContainer)
        //  set the title + a count to add a number to our meals
        myNodeElement = createNodeElements("h3",`${element.strMeal} n°${count}`,{"class": ""})
        myNodeContainer.appendChild(myNodeElement)    
        // insert a picture in my article
        myNodeElement = createNodeElements("img",``,{"src": element.strMealThumb})
        myNodeContainer.appendChild(myNodeElement)
        // add my targeted single element delete button
        myNodeElement = createNodeElements("a",`delete Meal`,{"class": "myBtnRemoveSingle"})
        myNodeContainer.appendChild(myNodeElement)
        count++
    })
    const btnRemoveSingleElement2 = document.querySelectorAll('.myBtnRemoveSingle')
    // cycle through my buttons on each article
    btnRemoveSingleElement2.forEach((element, id) => {
        const mainArticle = document.querySelectorAll('.myArticle')
        // add and event on each buttons which removes the selected article
        element.addEventListener('click', () =>{
            main.removeChild(mainArticle[id])
        })
    });
})
// add and event on my button which removes the last article
btnRemove.addEventListener('click', () =>{
    // gets all the articles
    const mainArticle2 = document.querySelectorAll('.myArticle')
    // checks if there's at least one element and if true, delete last
    if(mainArticle2.length != 0) main.removeChild(mainArticle2[mainArticle2.length-1])
})
// add and event on my button which removes all articles
btnRemoveAll.addEventListener('click', () =>{
    // gets all the articles
    const mainArticle2 = document.querySelectorAll('.myArticle')
    // cycle through them and delete them one by one
    mainArticle2.forEach(element =>{
        main.removeChild(element)
    })
})
