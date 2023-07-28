import {
    Link,
  } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () =>{
    return(
        <header className="myHeaderTop">
            <nav>
                <ul>
                    <li><Link to="/"><img src="/logo192.png" alt="logo" /></Link></li>
                    <li><h2>Cyril's Cocktail Blog</h2></li>
                    <li><SearchBar/></li>
                    <li><Link to="/cocktails">All Cocktails</Link></li>
                    <li><Link to="/randomCocktails">A random Cocktail</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header