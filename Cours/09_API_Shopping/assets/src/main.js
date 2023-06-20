const checkboxs = document.querySelectorAll('.myCheckboxes');
const displayItems = document.querySelector('.displayItems');
const allChecks = document.querySelectorAll('.checks');
const mySelect = document.querySelectorAll('.mySelect');

allChecks.forEach(element => {
    element.addEventListener('change', CategoryCheck)
});

let data
fetchDataPool()

async function fetchDataPool(){
    try {
        const response = await fetch(`https://fakestoreapi.com/products`)
        if(!response.ok) throw new Error(`Error : ${response.status}`)
        data = await response.json()
        createMyElements(data)

    } catch (error) {
        console.log(`Il y a eu une erreur.  JS : ${error}`)
    }
}
function CategoryCheck(){
    let multipleCategories = [] 
    allChecks.forEach(el => {
        if(el.checked) multipleCategories.push(el.value)
    });
    SelectSort()
    createMyElements(data, multipleCategories)
}

function SelectSort(e){
       if(e.value !=0){
        console.log(e)
       }
}



function createMyElements(data, multipleCategories = []){
    displayItems.textContent = "";
    data.forEach(element => {
        if(multipleCategories.length != 0) if(!multipleCategories.includes(element.category)) return

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



// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"