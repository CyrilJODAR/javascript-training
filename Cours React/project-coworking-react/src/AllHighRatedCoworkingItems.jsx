import CoworkingItem from "./CoworkingItem";

const AllHighRatedCoworkingItems = ({coworkingsFromFakeApi}) =>{
    return(
        <div className="HighRatedSpaces">
            <h2>High Rated places :</h2>
            {coworkingsFromFakeApi.map(item => item.rating >=4 &&(
                <CoworkingItem item={item} />
            ))}
        </div>
    )
}

export default AllHighRatedCoworkingItems;