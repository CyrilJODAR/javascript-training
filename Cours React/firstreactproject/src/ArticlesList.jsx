const ArticlesList = () =>{
    let myArticlesList = [
    {   title: "Title1",
        img : "/logo192.png",
        para : "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {   title: "Title2",
        img : "/logo192.png",
        para : "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {   title: "Title3",
        img : "/logo192.png",
        para : "Lorem ipsum dolor sit amet consectetur adipisicing elit."},]


        
        return(
        /* 
        on fait une boucle sur la variable myArticlesList 
        qui contient les articles (faussement) récupérés depuis l'API
        La fonction .map permet de faire une boucle sur un tableau (comme la 
        fonction foreach)
        La map prend en parametre une fonction qui sera executée pour chaque 
        élément du tableau
        Ici, pour chaque élément du tableau, on retourne du JSX, permettant
        de créer une balise article avec les données de l'article
      */
            <div>
                {myArticlesList.map((element)=>(
                    <article>
                        <h2>{element.title}</h2>
                        <img src={element.img} alt="" />
                        <p>{element.para}</p>
                    </article>
                ))}
            </div>
        )   
}

export default ArticlesList