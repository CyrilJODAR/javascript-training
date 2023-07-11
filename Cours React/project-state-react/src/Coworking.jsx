const Coworking = ({item}) =>{
    return(
        <article className="myArticles">
            <h3>{item.name}</h3>
            <p>{item.address}</p>
            <p>{item.phone}</p>
            <img src={item.img} alt="coworking space" />
        </article>
    )
}

export default Coworking;
