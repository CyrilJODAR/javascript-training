import SingleProduct from "./SingleProduct"

const PublishedAll = ({productsFromApi}) =>{

    return(
        <div>
            <h2>Tout les produits publiés</h2>
            {productsFromApi.map(product =>(
                <SingleProduct product={product}/>
            ))}
        </div>
    )
}

export default PublishedAll