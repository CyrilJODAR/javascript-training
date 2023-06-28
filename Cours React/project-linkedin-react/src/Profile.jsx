const Profile = () =>{
    const userInfosFromFakeApi = {
        firstName: "John",
        lastName: "Doe",
        age: 42,
        email: "contact@johndoe.fr",
        phone: "0123456789",
        adress: "1 rue de la Paix",
        city: "Paris",
        zipCode: "75000",
        country: "France",
        job: "Développeur web"
        };
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