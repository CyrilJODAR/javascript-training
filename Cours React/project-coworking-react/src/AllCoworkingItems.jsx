import CoworkingItem from "./CoworkingItem";
const AllCoworkingItems = ({coworkingsFromFakeApi}) =>{
    return(
        <div className="AllPlaces">
            {coworkingsFromFakeApi.map(item =>(
                <CoworkingItem item={item}/>
            ))}
        </div>
    )
}

export default AllCoworkingItems;