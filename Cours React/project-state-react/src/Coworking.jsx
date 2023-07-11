const Coworking = ({item}) =>{
    return(
        <article className="myArticles">
            <h3>{item.title}</h3>
            <p>{item.address}</p>
            <img src={item.img} alt="coworking space" />
            <p>{item.desc}</p>
        </article>
    )
}

export default Coworking;
