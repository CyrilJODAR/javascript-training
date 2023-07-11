import Coworking from "./Coworking";
import { useState } from "react";

const CoworkingFilter = ({coworkings}) => {
    
    const [filter,setFilter] = useState(true)
    const handleChange = (e) => {
        setFilter(e.target.value)
    }
    // FILTERS MY COWORKING PLACES
    let sortedCoworkings = coworkings.filter(cowork => filter === cowork.address ?? true)
    
    // REMOVES DUPLICATES TO GENERATE BUTTONS OR OPTIONS
    const coworkingPlaces = coworkings.map(coworking => coworking.address)
    const uniqueCoworkingPlaces = [...new Set(coworkingPlaces)];

    return (
      <section>
        <h2>Liste des coworkings</h2>
        
        {/* GENERATES BUTTONS FROM MY NON DUPLICATED LIST OF PLACES */}
        {uniqueCoworkingPlaces.map(coworkingPlace =>(
            <button value={coworkingPlace} onClick={handleChange}>{coworkingPlace}</button>
        ))
        }
        {/* GENERATES OPTIONS FOR MY SELECT FROM MY NON DUPLICATED LIST OF PLACES */}
        <select onChange={handleChange} name="villes" id="ville-select">
            <option value=''>--Choisir un filtre--</option>
            {uniqueCoworkingPlaces.map(coworkingPlace =>(
                <option value={coworkingPlace}>{coworkingPlace}</option>
            ))
            }
        </select>

        {/* GENERATES MY COWORKING PLACES DEPENDING ON THE FILTER */}
        <div className="myContainer">
            {sortedCoworkings.map((item, index) =>(
                <Coworking item={item} key={index}/>
            ))}
        </div>
      </section>
    );
  };
  
  export default CoworkingFilter;