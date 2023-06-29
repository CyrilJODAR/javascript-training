const UserInfo = ({userFromApi}) =>{
    return(
        <div className="containerUser">
            <ul>
                <li key={userFromApi.id} className="UserCard">
                    <h3>{userFromApi.firstName} {userFromApi.lastName}</h3>
                    <p>Age : {userFromApi.age} ans</p>
                    <p>Email : {userFromApi.email}</p>
                    <p>Phone : {userFromApi.phone}</p>
                    <p>Adress : {userFromApi.adress} {userFromApi.city}, {userFromApi.zipCode} {userFromApi.country}</p>
                    <h4>{userFromApi.job}</h4>
                </li>
            </ul>
        </div>
    )
}
export default UserInfo