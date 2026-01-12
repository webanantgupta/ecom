import { useContext } from "react";
import Choose from "../components/Choose";
import HeroImageCarousal from "../components/HeroImageCarousal";
import PopularBrands from "../components/PopularBrands";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";

const Home = () => {

  const navigate = useNavigate();
  const { products, addToCart } = useContext(CartContext);
console.log(products);


  return (
    <div>
      <HeroImageCarousal />
      <div className=" mx-2 my-5 p-5 sm:mx-2 sm:p-2 md:mx-6 md:p-10 lg:mx-20 ">
        <Choose />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-10 py-10">
          {products &&
            products.map((obj) => {
              return (
                <div
                  key={obj.id}
                  className="bg-slate-200 product_card flex flex-col justify-evenly rounded-2xl p-5 "
                >
                  <img
                    src={obj.thumbnail}
                    alt={obj.title}
                    className="object-cover h-60"
                  />
                  <div className="flex justify-between my-2">
                    <h4 className="text-center">
                      {obj.title}
                    </h4>
                    <div className="flex items-center">
                      <HiOutlineCurrencyDollar className="text-green-500" />
                      <div>
                        <p className="">{obj.price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-evenly lg:gap-5 lg:justify-center xl:justify-between">
                    <button onClick={()=> navigate("/view", {state:obj})} className="bg-slate-200 border-2 hover:bg-blue-500 hover:text-white hover:border-blue-500 duration-500 px-10 py-1 rounded-lg text-black cursor-pointer">
                        View
                    </button>
                    <button onClick={() => { addToCart(obj); }} className="bg-blue-500 hover:text-black duration-500 px-10 py-1 cursor-pointer rounded-lg text-white">Add</button>
                  </div>
                </div>
              );
            })}
        </div>
        <PopularBrands />
      </div>
    </div>
  );
};

export default Home;
