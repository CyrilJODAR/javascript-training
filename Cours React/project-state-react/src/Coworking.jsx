const Coworking = ({item}) =>{
    return(
        <article className="myArticles">
            <h3>Nom : {item.name}</h3>
            <p>Adresse : {item.address}</p>
            <p>Téléphone : {item.phone}</p>
            <img src={item.img} alt="coworking space" />
        </article>
    )
}

export default Coworking;
