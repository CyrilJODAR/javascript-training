import Coworking from "./Coworking";
import { useState } from "react";

const CreateCoworking = () =>{
    const [objCoworking, setObjCoworking] = useState([]);
    const handleSubmit = (e) =>{
        e.preventDefault()
        setObjCoworking([...objCoworking,{
            name : e.target.nom.value,
            img : "https://picsum.photos/200/200",
            phone : e.target.phone.value,
            address : e.target.adress.value,
        }])
        e.target.reset()
    }

    return(
        <>
            <div className="container" onSubmit={handleSubmit}>
                <form>
                    <div className="row">
                        <div className="col-25"><label htmlFor="title">Nom</label></div>
                        <div className="col-75"><input type="text" id="fname" name="nom" placeholder="le titre de votre card.."/></div>
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor="adress">adresse</label></div>
                        <div className="col-75"><input type="text" id="lname" name="adress" placeholder="l'adresse du coworking.."/></div>
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor="desc">phone</label></div>
                        <div className="col-75"><input type="text" id="subject" name="phone" placeholder="e.t telephone maison.."></input></div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
                {objCoworking && (
                    objCoworking.map((item, index) =>(
                        <Coworking item={item} key={index}/>
                    )))}
        </>
    )
}
export default CreateCoworking;