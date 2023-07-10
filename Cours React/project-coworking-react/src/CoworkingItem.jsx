const CoworkingItem = ({item}) =>{
    return(
        <article className="myArticles" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.address}, {item.city}</p>
            <img src={item.image} alt="coworking space" />
            <p className="rating">{item.rating}/5</p>
        </article>
    )
}

export default CoworkingItem;

// {
//     id: 4,
//     name: "Coworking 4",
//     address: "Adresse 4",
//     city: "Ville 4",
//     image: "https://picsum.photos/200/200",
//     rating: 2,
//   },