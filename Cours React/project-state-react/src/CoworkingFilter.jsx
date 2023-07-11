import Coworking from "./Coworking";
import { useState } from "react";

const CoworkingFilter = ({coworkings}) => {

    const [filterAdresses,setFilterAdresses] = useState(true)
    const handleFilterAdresse = (e) => {
        setFilterAdresses(e.target.value)
    }
    // FILTERS MY COWORKING PLACES
    // eslint-disable-next-line
    let sortedCoworkings = coworkings.filter(cowork => filterAdresses === cowork.address || filterAdresses === true || filterAdresses === "displayAll")
    
    // REMOVES DUPLICATES TO GENERATE BUTTONS OR OPTIONS
    const uniqueCoworkingPlaces = [...new Set(coworkings.map(coworking => coworking.address))];

    return (
      <section>
        <h2>Liste des coworkings</h2>
        
        {/* GENERATES BUTTONS FROM MY NON DUPLICATED LIST OF PLACES */}
        {uniqueCoworkingPlaces.map(coworkingPlace =>(
            <button value={coworkingPlace} onClick={handleFilterAdresse}>{coworkingPlace}</button>
        ))
        }
        {/* GENERATES OPTIONS FOR MY SELECT FROM MY NON DUPLICATED LIST OF PLACES */}
        <select onChange={handleFilterAdresse} name="villes" id="ville-select">
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