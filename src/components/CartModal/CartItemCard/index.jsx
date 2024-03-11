import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeProductCart }) => {
   
   return (
      <li className={styles.cards}>
         <div className={styles.categorys}>
            <img src={product.img} 
               alt={product.name}
            />
         </div>
         <h3 className="title three">
            {product.name}
         </h3>
         <button className="title sm" 
            onClick={() => removeProductCart(product.id)} 
            aria-label="delete" 
            title="Remover item">
            <MdDelete size={30}/>
         </button>
      </li>
   );
};
