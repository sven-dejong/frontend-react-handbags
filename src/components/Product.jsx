function Product({labelText, bagImg, bagName, bagPrice}) {
    return (
        <>
            <article>
            <span>{labelText}</span>
            <img src={bagImg} alt={bagName}/>
            <p>{bagName}</p>
            <h4>{bagPrice}</h4>
            </article>
        </>
    )
}

export default Product;