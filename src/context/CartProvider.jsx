import CartContext from "./CartContext";
import axios from "axios";
import { useEffect,useState } from "react";


const CartProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    return await axios
      .get("https://dummyjson.com/products?limit=10")
      .then((result) => {
        console.log(result.data.products);
        const products = result.data.products;
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <CartContext.Provider value={{products}}>
    {children}
    </CartContext.Provider>;
};

export default CartProvider;
