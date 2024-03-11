import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";


export const Header = ({setIsOpen , setValue, cartList, setProductList, value}) => {
   
   const submit = (e) => {
      e.preventDefault();
      setProductList(value);
      setValue("");
   };

   return (
      <header>
         <div className="container">
            <div className={styles.flexBox}>
               <img src={Logo} alt="Logo Kenzie Burguer"/>
               <p onClick={() => setIsOpen(true)}>
                  <MdShoppingCart className={styles.car} size={35}/>
                  <span>{cartList.length}</span>
               </p>
               <form onSubmit={submit}>
                  <input
                     type="text"
                     placeholder="Digitar Pesquisa"
                     onChange={(e) => setValue(e.target.value)}
                     required
                  />
                  <button className="btnSm" type="submit">
                        <MdSearch size={25} />
                  </button>
               </form>
            </div>
         </div>
      </header>
   );
};


