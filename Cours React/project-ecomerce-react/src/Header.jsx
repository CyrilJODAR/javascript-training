import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = ({cartFromApi}) =>{
    const cart = <FontAwesomeIcon icon={faCartShopping} />

    return(
        <header className='myHeader'>
            <ul>
                <li><a href="#blank"><h2>Le Ecommerce du pauvre</h2></a></li>
                <li><a href="#blank"><img src="/logo192.png" alt="logo" /></a></li>
                <li><a href="#blank">Menu1</a></li>
                <li><a href="#blank">Menu2</a></li>
                <li><a href="#blank">Menu3</a></li>
                <li><a href="#blank">{cart} <i>{cartFromApi.items[0].quantity}</i></a></li>
            </ul>
        </header>
    )
}

export default Header