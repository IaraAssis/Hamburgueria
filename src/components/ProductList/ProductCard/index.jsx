import styles from "./style.module.scss"

export const ProductCard = ({ product, addProductCart}) => {
    return(
        <li className={styles.cards}>
            <img src={product.img} 
                alt={product.name} 
            />
            <div className={styles.categorys}>
                <h3 className="title three">
                    {product.name}
                </h3>
                <p className="title sm">
                    {product.category}
                </p>
                <strong className="Headline">
                    {product.price
                    .toLocaleString('pt-BR',
                    {style: "currency", currency: "BRL"})}
                </strong>
                <button className="title sm btnSm" 
                    onClick={() => addProductCart (product)}>
                    Adicionar
                </button>
            </div>
        </li>
    );
};