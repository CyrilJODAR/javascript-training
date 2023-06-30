import SingleProduct from "./SingleProduct"

const PublishedLast = ({productsFromApi}) =>{
    const sortedProductsByDate = productsFromApi.sort((a, b) =>(
        new Date(b.publishedAt) - new Date(a.publishedAt)
    ))
const lastThree = sortedProductsByDate.slice(0,3)

    return(
        <div>
            <h2>Tout les produits publiés les plus récents</h2>
            {lastThree.map(product =>(
               <SingleProduct product={product}/>
            ))}
        </div>
    )
}

export default PublishedLast