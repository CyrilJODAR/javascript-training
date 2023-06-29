const Header = ({userInfosFromFakeApi}) =>{
    return(
        <header>
            <section className="sectionHeaderNav">
                <ul>
                    <li><a href="#blank"><img src="/logo192.png" alt="" /></a></li>
                    <li><a href="#blank">Profile</a></li>
                    <li><a href="#blank">Experiences</a></li>
                    <li><a href="#blank">Connected as {userInfosFromFakeApi.firstName} {userInfosFromFakeApi.lastName}</a></li>
                </ul>
            </section>
        </header>
    )
}

export default Header