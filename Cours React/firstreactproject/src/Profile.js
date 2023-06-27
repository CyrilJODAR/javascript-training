const Profile = () =>{
    const userInfo= {
        fullname : "Cyril JODAR",
        job : "développeur",
        age : 25,
    }
    return(
        <div className="presentationPerso">
            <div className='containerImgProfilePerso'>
                <img className='imgProfilePerso' src="/panini_dab.jpg" alt="moi qui dab avec un panini chocolat"/>
            </div>
            <div className="resumePerso">
                <p>Nom : {userInfo.fullname}</p>
                <p>Age : {userInfo.age} ans</p>
                <p>Job :{userInfo.job}</p>
            </div>
        </div>
    )
}
export default Profile;