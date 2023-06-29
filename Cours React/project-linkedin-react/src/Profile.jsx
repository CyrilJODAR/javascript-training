const Profile = ({userInfosFromFakeApi}) =>{

    return(
            <div className="CardProfile">
                <h3>{userInfosFromFakeApi.firstName} {userInfosFromFakeApi.lastName}</h3>
                <p>Age : {userInfosFromFakeApi.age} ans</p>
                <p>Email : {userInfosFromFakeApi.email}</p>
                <p>Phone : {userInfosFromFakeApi.phone}</p>
                <p>Adress : {userInfosFromFakeApi.adress} {userInfosFromFakeApi.city}, {userInfosFromFakeApi.zipCode} {userInfosFromFakeApi.country}</p>
                <h4>{userInfosFromFakeApi.job}</h4>
            </div>
    )
}

export default Profile