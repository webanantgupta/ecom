import { useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";

const Cart = () => {
  const locate = useLocation();
  const prod = locate.state.prod;
  const selectedQuantity = locate.state.qty;
  const selectedPrice = locate.state.qtyPrice;

  console.log(locate.state)
  return (
    <div>
      <div className="p-5">
        <h2 className="text-center text-2xl my-3 font-bold">Your Cart</h2>
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
                <tr>
                  <td className="border  flex justify-center items-center">
                    <img
                      src={prod.thumbnail}
                      alt={prod.title}
                      className="h-40"
                    />
                  </td>
                  <td className="border border-black">
                    <p className="text-center font-bold">{prod.title}</p>
                  </td>
                  <td className="border border-black ">
                    <div className="flex items-center justify-evenly">
                      <p className="text-xl">{selectedQuantity}</p>
                      <MdDeleteForever className="text-2xl bg-red-500 text-white rounded cursor-pointer" />
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
                      <p className="text-xl">{selectedPrice}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-200 flex-2/12 flex justify-center items-center">
            <div className="flex flex-col">
              <p className="text-xl font-semibold flex items-center">Sub - Total : <FaDollarSign/>{selectedPrice}</p>
              <p className="text-2xl font-semibold text-red-500 flex items-center">Total : <FaDollarSign/>{selectedPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
