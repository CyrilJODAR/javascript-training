const checkboxs = document.querySelectorAll('.myCheckboxes');
const displayItems = document.querySelector('.displayItems');
const allChecks = document.querySelectorAll('.myCheckboxes');
const mySelect = document.querySelector('.mySelect');
let multipleCategories = []
let data
allChecks.forEach(element => {
    element.addEventListener('change', onChecks)
});
mySelect.addEventListener('change', onSelect)

fetchDataPool()
async function fetchDataPool(){
    try {
        const response = await fetch(`https://fakestoreapi.com/products`)
        if(!response.ok) throw new Error(`Error : ${response.status}`)
        data = await response.json()
        createMyElements()
    } catch (error) {
        console.log(`Il y a eu une erreur.  JS : ${error}`)
    }
}
function selectSort(){
    data.sort((a,b)=>{
        if(mySelect.value === "croissant") return tempData = (a.price - b.price)
        if(mySelect.value === "decroissant") return tempData = (b.price-a.price)
        if(mySelect.value === "nCroissant") return tempData = (a.rating.rate-b.rating.rate)
        if(mySelect.value === "nDecroissant") return tempData = (b.rating.rate-a.rating.rate)
    })
}
function onSelect(){
    selectSort()
    createMyElements()
}
function onChecks(){
    updateCategory()
    createMyElements()
}
function updateCategory(){
    multipleCategories = []
    allChecks.forEach(el => {
        if (el.checked) multipleCategories.push(el.value)
    })
}
function createMyElements(){
    displayItems.textContent = "";
    data.forEach(element => {
        if(multipleCategories.length != 0 && !multipleCategories.includes(element.category)) return
        
        const newDiv = document.createElement("div")
        newDiv.classList.add("card", "cardStyle")

        const newIMG = document.createElement('img')
        newIMG.classList.add("card-img-top")
        newIMG.src = element.image

        const newDivBody = document.createElement("div")
        newDivBody.classList.add("card-body", "cardBodyStyle")

        const cardTitle = document.createElement("h5")
        cardTitle.classList.add("card-title")
        cardTitle.textContent = element.title

        const cardP = document.createElement("p")
        cardP.classList.add("card-text")
        cardP.textContent = element.description

        const newLowDiv = document.createElement("div")
        newLowDiv.classList.add("lowDiv")

        const cardPriceP = document.createElement("p")
        cardPriceP.textContent = `${element.price} $`

        const cardA = document.createElement("a")
        cardA.classList.add("btn")
        cardA.textContent = "View >"

        displayItems.appendChild(newDiv)
        newDiv.appendChild(newIMG)
        newDiv.appendChild(newDivBody)
        newDivBody.appendChild(cardTitle)
        newDivBody.appendChild(cardP)
        newDivBody.appendChild(newLowDiv)
        newLowDiv.appendChild(cardPriceP)      
        newLowDiv.appendChild(cardA)
    });
}