import {
    Link,
  } from "react-router-dom";

const Footer = () =>{
    return(
        <footer className="sectionFooterMentions">
            <ul>
                <li><Link to="/"><img src="/logo192.png" alt="" /></Link></li>

                <li>Horraire : Mardi - Dimanche | 11h - 23h30</li>
            </ul>
        </footer>
    )
}
export default Footer