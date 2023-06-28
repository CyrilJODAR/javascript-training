const MealList = () =>{
    const mealsListResponseFromFakeApi = [
        {
          id: 1,
          title: "Poulet au légumes",
          image: "https://picsum.photos/200/300",
          description: "Un bon poulet avec des légumes",
          isPublished: true,
        },
        {
          id: 2,
          title: "Boeuf bourguignon",
          image: "https://picsum.photos/200/300",
          description: "Un bon boeuf bourguignon",
          isPublished: false,
        },
        {
          id: 3,
          title: "Poisson aux légumes",
          image: "https://picsum.photos/200/300",
          description: "Un bon poisson avec des légumes",
          isPublished: true,
        },
      ];
    return(
        <main className="myMain">
            {mealsListResponseFromFakeApi.map(element => element.isPublished &&( 
                <article>
                    <h2>{element.title}</h2>
                    <img src={element.image} alt="" />
                    <p>{element.description}</p>
                </article>
            ))}
        </main>
    )
}

export default MealList