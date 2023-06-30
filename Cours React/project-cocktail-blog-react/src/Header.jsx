const Header = ({userFromApi}) =>{
    return(
        <header className="myHeaderTop">
            <nav>
                <ul>
                    <li><a href="#blank"><img src="/logo192.png" alt="logo" /></a></li>
                    <li><h2>{userFromApi.firstName} {userFromApi.lastName}'s Cocktail Blog</h2></li>
                    <li><a href="#blank">Menu1</a></li>
                    <li><a href="#blank">Menu2</a></li>
                    <li><a href="#blank">Menu3</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header