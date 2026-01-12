import logo from "../assets/ecomlogo.webp"
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";


const Header = () =>{
    const {cart = []} = useContext(CartContext) || {};
    const totalQuantity = (cart || []).reduce((acc,curr) => acc + (curr.quantity || 0),0);

    return (
         <div className="bg-slate-200 flex justify-between items-center h-20 px-5">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="h-20 rounded-2xl p-2" />
      </Link>
      <div className="flex justify-between items-center rounded-t-4xl ">
        <div className="">
          <input
           placeholder="Search here..."
           className="bg-white px-2 py-2 rounded-tl-xl rounded-bl-xl"
           />
        </div>

        <div className="bg-blue-500 py-2 px-2 rounded-tr-xl rounded-br-xl cursor-pointer">
            <IoSearchSharp className="text-2xl  flex justify-center items-center"/>
        </div>
      </div>
      <div className="relative">
        <Link to={"/cart"} className="relative">
          <MdOutlineShoppingCart className="text-3xl" /> 
        </Link>
        <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center">
            {totalQuantity}
        </div>
      </div>
    </div>
    )
}

export default Header;