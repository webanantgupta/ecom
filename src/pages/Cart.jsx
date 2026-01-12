import { MdDeleteForever } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const Cart = () => {
  const { cart = [], removeFromCart } = useContext(CartContext) || {};

  const subtotal = cart.reduce((sum, item) => sum + (item.quantity || 1) * (item.price || 0), 0);

  return (
    <div className="p-5">
      <h2 className="text-center text-2xl my-3 font-bold">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="flex justify-between">
          <div className="flex-10/12 flex justify-center">
            <table className="w-300">
              <thead className="bg-slate-200">
                <tr>
                  <th className="border border-black">Image</th>
                  <th className="border border-black">Title</th>
                  <th className="border border-black">Quantity</th>
                  <th className="border border-black">Unit Price</th>
                  <th className="border border-black">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((prod) => (
                  <tr key={prod.id}>
                    <td className="border flex justify-center items-center">
                      <img src={prod.thumbnail} alt={prod.title} className="h-40" />
                    </td>
                    <td className="border border-black">
                      <p className="text-center font-bold">{prod.title}</p>
                    </td>
                    <td className="border border-black">
                      <div className="flex items-center justify-evenly">
                        <p className="text-xl">{prod.quantity}</p>
                        <MdDeleteForever onClick={() => removeFromCart && removeFromCart(prod.id)} className="text-2xl bg-red-500 text-white rounded cursor-pointer" />
                      </div>
                    </td>
                    <td className="border border-black">
                      <div className="flex justify-center items-center">
                        <FaDollarSign className="text-xl" />
                        <p className="text-xl">{prod.price}</p>
                      </div>
                    </td>
                    <td className="border border-black">
                      <div className="flex justify-center items-center">
                        <FaDollarSign className="text-xl" />
                        <p className="text-xl">{((prod.quantity || 1) * (prod.price || 0)).toFixed(2)}</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-200 flex-2/12 flex justify-center items-center  flex-col gap-3">
            <div className="flex flex-col">
              <p className="text-xl font-semibold flex items-center">Sub - Total : <FaDollarSign/>{subtotal.toFixed(2)}</p>
              <p className="text-2xl font-semibold text-red-500 flex items-center">Total : <FaDollarSign/>{subtotal.toFixed(2)}</p>
            </div>
            <div>
              <button  className="bg-green-500  px-5 py-2 hover:text-white rounded-xl cursor-pointer">
                Check Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
