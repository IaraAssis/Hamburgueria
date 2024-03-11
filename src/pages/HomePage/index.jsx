import {Api} from "../../services/api";
import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { toast } from "react-toastify";
import "../../styles/index.scss";


export const HomePage = () => {

   const [value, setValue] = useState("");
   const [productList, setProductList] = useState([]);
   const [isOpen, setIsOpen] = useState(false);

   const localStorageCartList = localStorage.getItem("@CARTLIST");
   const [cartList, setCartList] = useState(localStorageCartList ?
         JSON.parse(localStorageCartList) :
         []
   ); 
      
   useEffect(() => {

      const getHamb = async () => {
         try{
            const {data} = await Api.get("products");
            setProductList(data);
         }catch (error){
            console.log(error);
         };
      };
      getHamb();

   }, []);

   useEffect(() => {

      localStorage.setItem("@CARTLIST", JSON.stringify(cartList));

   },[cartList]);

   const addProductCart = (addcart) => {
      if(!cartList.some((cart) => cart.id === addcart.id)){
         setCartList([...cartList, addcart]);

         toast.success("Produto adicionado com sucesso!");
      }else{
         toast.error("Produto já foi adicionado!");
      }
   };

   const searchResult = productList.filter((product) => (
      product.name.toLowerCase().includes(value.toLowerCase())));
      const resultList = value ? searchResult : productList;

   const removeProductCart = (cartId) => {
      const newProductCart = cartList.filter((cart) => (
      cart.id !== cartId));

      setCartList(newProductCart);
      toast.success("Produto removido com sucesso!");

   };

   const removeAllProducts = () => {
      setCartList([]);
      toast.success('Todos os produtos removidos do carrinho!');

   };

   return(
      <>
         <Header 
            setIsOpen={setIsOpen} 
            productList={productList}
            setProductList={setProductList}
            setValue={setValue}
            value={value}
            cartList={cartList}
            setCartList={setCartList}
         />
         {isOpen &&  
            <CartModal 
               setCartList={setCartList}
               cartList={cartList} 
               isOpen={isOpen} 
               setIsOpen={setIsOpen} 
               removeProductCart={removeProductCart}
               removeAllProducts={removeAllProducts}
            />
         }
         <main>
            <ProductList 
               resultList={resultList}
               addProductCart={addProductCart}
            />
         </main>
      </>
   );
};

