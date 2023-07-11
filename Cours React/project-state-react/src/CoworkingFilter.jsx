import Coworking from "./Coworking";
import { useState } from "react";

const CoworkingFilter = ({coworkings}) => {

    const [filter,setFilter] = useState(true)
    const handleChange = (e) => {
        setFilter(e.target.value)
    }
    // FILTERS MY COWORKING PLACES
    // eslint-disable-next-line
    let sortedCoworkings = coworkings.filter(cowork => filter === cowork.address || filter === true || filter === "displayAll")
    
    // REMOVES DUPLICATES TO GENERATE BUTTONS OR OPTIONS
    const uniqueCoworkingPlaces = [...new Set(coworkings.map(coworking => coworking.address))];

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
            <option value="displayAll">--Choisir un filtre--</option>
            {uniqueCoworkingPlaces.map(coworkingPlace =>(
                <option value={coworkingPlace}>{coworkingPlace}</option>
            ))
            }
        </select>

        {/* GENERATES MY COWORKING PLACES DEPENDING ON THE FILTER */}
        <div className="myContainer">
            {sortedCoworkings.map((item) =>(
                <Coworking item={item} key={item.id}/>
            ))}
        </div>
      </section>
    );
  };
  
  export default CoworkingFilter;