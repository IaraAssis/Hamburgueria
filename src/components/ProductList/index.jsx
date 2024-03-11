import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss"

export const ProductList = ({ resultList, addProductCart }) => {
   return (
      <ul className={`${"container"} ${styles.containerCards}`}>
         {resultList.map((product) => (
            <ProductCard 
               key={product.id} 
               product={product}
               addProductCart={addProductCart}
            />
         ))}
      </ul>
   );
};
