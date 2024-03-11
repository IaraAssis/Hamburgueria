import { useEffect , useRef} from "react";
import {useOutclick} from "../../hooks/useOutclick";
import { useKeydown } from "../../hooks/useKeydown";
import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "../CartModal/style.module.scss";

export const CartModal = ({ cartList, setIsOpen, removeProductCart, removeAllProducts}) => {

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const modalRef = useOutclick(() =>{
      setIsOpen(false);
   });

   const ButtonRef = useKeydown("Escape",() =>{
      setIsOpen(false);
   })

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div ref={modalRef} className={styles.modalBox}>
            <div className={styles.car}>
               <h2 className="title three">Carrinho de compras</h2>
               <button ref={ButtonRef}
                  aria-label="close" 
                  title="Fechar"
                  onClick={()=> setIsOpen(false)}>
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.overflow}>
               <ul className={`${"container"} ${styles.containerCards}`}>
                  {cartList.length > 0 ?
                     cartList.map((product) => (
                     <CartItemCard 
                        key={product.id} 
                        product={product} 
                        removeProductCart={removeProductCart}
                     />
                     )): <strong>Nenhum produto adicionado</strong>}
               </ul>
            </div>
            <div className={styles.total}>
               <div>
                  <span className="title sm">
                     Total
                  </span>
                  <span className="Headline sm">
                     {total.toLocaleString('pt-BR', {style: "currency", currency: "BRL"})}
                  </span>
               </div>
               <button className="btnBig" 
                  onClick={removeAllProducts}>
                     Remover todos
               </button>
            </div>
         </div>
      </div>
   );
};