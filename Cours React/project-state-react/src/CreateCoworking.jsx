import Coworking from "./Coworking";
import { useState } from "react";

const CreateCoworking = () =>{
    const [objCoworking, setObjCoworking] = useState([]);
    const handleSubmit = (e) =>{
        e.preventDefault()
        setObjCoworking([...objCoworking,{
            title : e.target.title.value,
            desc : e.target.desc.value,
            img : "https://picsum.photos/200/200",
            address : e.target.adress.value,
        }])
        e.target.reset()
    }
    return(
        <>
            <div className="container" onSubmit={handleSubmit}>
                <form>
                    <div className="row">
                        <div className="col-25"><label htmlFor="title">Titre</label></div>
                        <div className="col-75"><input type="text" id="fname" name="title" placeholder="Your name.."/></div>
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor="adress">adresse</label></div>
                        <div className="col-75"><input type="text" id="lname" name="adress" placeholder="Your last name.."/></div>
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor="desc">desc</label></div>
                        <div className="col-75"><textarea id="subject" name="desc" placeholder="Write something.."></textarea></div>
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