const SingleProduct = ({product}) =>{
    const publishedDate = (ele) =>{
        const myDate = new Date(ele).toDateString("M/Y")
        return myDate
    }

    return(
        <article>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <h4>{product.catedory}</h4>
        <h4>{publishedDate(product.publishedAt)}</h4>
    </article>
    )
}

export default SingleProduct