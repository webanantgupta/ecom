import { Link, useLocation } from "react-router-dom";
import worldImg from "../assets/world.png";
import codImg from "../assets/cod .png";
import originalImg from "../assets/original.png";
import thumgsUp from "../assets/thumbsup.png";
import { CiStar } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";


const ViewDetailes = () => {

const {cart, addToCart} = useContext(CartContext);
console.log(cart);
console.log(addToCart);



  const locate = useLocation();
  const prod = locate.state;
  console.log(prod);
  const [qty,setqty] = useState(1);
  const [qtyPrice,setqtyPrice] = useState(prod.price)

  // console.log(locate.state);
  const handleQtyChange = (number) =>{
    console.log(number);
    
  if(number >= 1){
    const finalPrice = number * prod.price;
    setqtyPrice(finalPrice);
  } else {
    return
  }
  setqty(number);
  }




  return (
    <div className="p-5 h-full">
      <div className="flex flex-col md:flex-row md:gap-5">
        <div className="flex-1">
          <img src={prod.thumbnail} alt={prod.thumbnail}  className=" h-150 object-contain"/>
        </div>
        <div className="flex-1 p-3 flex flex-col gap-5">
          <h3 className="text-center font-semibold text-xl md:text-left md:text-3xl md:font-bold">{prod.title}</h3>
          <div className="flex justify-between">
            <p className="flex items-center md:text-2xl">
            <FaDollarSign className="text-green-500 md:text-2xl"/>
                {prod.price}</p>
            <div className="flex gap-3">
                 <div className="">
                <p className="text-amber-500 md:text-2xl">{prod.rating}</p>
              </div>
              <div className="flex items-center justify-between">
                <CiStar className=" text-amber-500 md:text-2xl"/>
                <CiStar  className=" text-amber-500 md:text-2xl"/>
                <CiStar className=" text-amber-500 md:text-2xl"/>
                <CiStar className=" text-amber-500 md:text-2xl"/>
                <CiStar className=" text-amber-500 md:text-2xl"/>
              </div>
             
            </div>
          </div>
          <p className="md:text-xl"><span className="md:font-bold">Brand : </span>{prod.brand}</p>
          <p className="text-red-500 md:text-xl">Stock : {prod.stock}</p>
          <hr />
          <p className="text-justify md:text-xl"><span className="md:font-bold">Description : </span>{prod.description}</p>
          <p className="text-xl"><span className="font-bold">Weight : </span>{prod.weight} kg</p>
          <p className="text-xl"><span className="font-bold">Return Policy : </span>{prod.returnPolicy}</p>
          <p className="text-xl"><span className="font-bold">Delivery : </span>{prod.shippingInformation}</p>
          <div className="flex justify-between gap-4 ">
            <div className="flex items-center gap-2 text-xl">
              <label className="font-bold">Qty</label>
              <input 
              type="number" 
              className="bg-slate-300 w-10  md:w-30"
              value={qty}
              // onChange={(e)=>{
              //  const value = Number(e.target.value)
              //   if(value < 1) return;
              //   setqty(value);
              // }

              // }
              // onChange={(e)=> handleQtyChange(Number(e.target.value))}
              />
              <div className="flex items-center bg-slate-200 px-2">
                <FaDollarSign className="text-green-500"/> 
                <span>{qtyPrice.toFixed(2)}</span>
              </div>
            </div>
            <button  
            onClick={()=>addToCart(prod,qty)}
            className="bg-blue-500 w-30 py-2 hover:text-black cursor-pointer rounded-lg text-white md:text-xl md:flex md:justify-center">
             Add
            </button>
          </div>
          <div className="flex gap-5">
            <img src={worldImg} alt="world" className="bg-slate-300 h-10 p-1 md:h-15 rounded-xl" />
            <img src={codImg} alt="cod" className="bg-slate-300 h-10 p-1 md:h-15 rounded-xl" />
            <img
              src={originalImg}
              alt="original"
              className="bg-slate-300 h-10 p-1 md:h-15 rounded-xl"
            />
            <img
              src={thumgsUp}
              alt="thumbs up"
              className="bg-slate-300 h-10 p-1 md:h-15 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailes;
