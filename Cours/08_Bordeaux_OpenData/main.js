const RefreshButton = document.querySelector('button');
const errorMsg = document.querySelector('.errorMsg');
const placeName = document.querySelectorAll('.place-name');
const placeInfos = document.querySelectorAll('.place-infos');
const visitors = document.querySelectorAll('.visitors');

RefreshButton.addEventListener('click', btnSearch);

function btnSearch(){
    whileSearching("true")
    RefreshButton.classList.add('searching')
    fetchDataPool()
}
function whileSearching(isSearching){
    RefreshButton.textContent = isSearching === "true" ? "..." : "Refresh"
    RefreshButton.classList.remove('searching')
}
async function fetchDataPool(){
    try {
        const response = await fetch(`https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=bor_frequentation_piscine_tr`)
        if(!response.ok) throw new Error(`Error : ${response.status}`)
        const data = await response.json()
        whileSearching()
        sortArray(data)
    } catch (error) {
        whileSearching()
        errorMsg.textContent = `Il y a eu une erreur.  JS : ${error}`
    }
}
function sortArray(data){
    let sortedArray
     data.records.sort((a,b)=>{
        let ratioVisitor1 = a['fields']["fmicourante"] / a['fields']["fmizonmax"]
        let ratioVisitor2 = b['fields']["fmicourante"] / b['fields']["fmizonmax"]

        sortedArray = (ratioVisitor1 - ratioVisitor2)*-1
        return sortedArray
     })
     displayContent(data)
}
function displayContent(data){
    data.records.forEach((element, index) => {
        let scaleVisitor = element['fields']["fmicourante"] / element['fields']["fmizonmax"];

        placeName[index].textContent = `${element['fields']["etablissement_etalib"]} (${element['fields']["fmizonlib"]})`
        placeInfos[index].textContent = `${element['fields']["fmicourante"]} / ${element['fields']["fmizonmax"]}`
        visitors[index].style.transform = `scaleX(${scaleVisitor})`;
    });
}