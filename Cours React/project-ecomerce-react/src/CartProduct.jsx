const CartProduct = ({cartFromApi}) =>{
    return(
        <aside className="myAside">
            <h2>Votre Cart</h2>
            <section>
                <ul>
                    {cartFromApi.items.map(allItems =>(
                        <>
                            <li>Name : {allItems.product}</li>
                            <li>Price/u : {allItems.amount} $</li>
                            <li>Quantity : {allItems.quantity}</li>
                        </>
                    ))}
                </ul>
                <h4>TotalAmount : {cartFromApi.totalAmount} $</h4>
                <h3>User : {cartFromApi.user}</h3>
            </section>
        </aside>
    )
}

export default CartProduct

