import { useState } from "react";
import CoworkingItem from "./CoworkingItem";

const AllHighRatedCoworkingItems = ({coworkingsFromFakeApi}) =>{

    const [displayBestCoworkings, setDisplayBestCoworkings] = useState(false);

    const handleClickShow = () =>{
        setDisplayBestCoworkings(!displayBestCoworkings);
    };

    return(
        <div className="HighRatedSpaces">
            {displayBestCoworkings && (         
                coworkingsFromFakeApi.map((item, index) => item.rating >=4 &&(
                    <CoworkingItem item={item} key={index}/>
            )))}
            <h2>High Rated places :</h2>
            <a href="#blank" onClick={handleClickShow} className="btnShowCoworking">Afficher</a>
        </div>
    )
};

export default AllHighRatedCoworkingItems;