import CartContext from "./CartContext";
import axios from "axios";
import { useEffect,useState } from "react";


const CartProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };


  useEffect(() => {
    fetchData();
  }, []);

  return <CartContext.Provider value={{products,addToCart,removeFromCart,cart}}>
    {children}
    </CartContext.Provider>;
};

export default CartProvider;
