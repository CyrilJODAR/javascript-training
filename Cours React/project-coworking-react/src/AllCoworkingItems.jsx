import CoworkingItem from "./CoworkingItem";
const AllCoworkingItems = ({coworkingsFromFakeApi}) =>{
    return(
        <div className="AllPlaces">
            {coworkingsFromFakeApi.map((item,index) =>(
                <CoworkingItem item={item} key={index}/>
            ))}
        </div>
    )
}

export default AllCoworkingItems;