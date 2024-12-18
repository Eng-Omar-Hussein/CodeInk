import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch=useDispatch();
  return (
    <div className="flex items-center bg-white shadow-md p-4 mb-4 rounded-lg">
      {/* Image */}
      <img
        src={item.pictureUrl}
        alt="Book Cover"
        className="w-24 h-24 object-cover"
      />

      {/* Details */}
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium">{item.name}</h3>
        <div className="flex justify-between items-center mt-2 text-gray-600">
          <div className="flex items-center">
            {/* Decrease Button */}
            <button
              className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300"
              onClick={() => dispatch(updateQuantity({id:item.id, quantity: Math.max(1, item.quantity - 1), increase:false}))} // Prevent going below 1
            >
              -
            </button>
            {/* Quantity */}
            <span className="px-4 text-lg">{item.quantity}</span>
            {/* Increase Button */}
            <button
              className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300"
              onClick={() => dispatch(updateQuantity({id:item.id, quantity:item.quantity + 1, increase:true}))}
            >
              +
            </button>
          </div>
          {/* Remove Button */}
          <span
            className="text-red-500 cursor-pointer hover:underline"
            onClick={() => dispatch(removeItem(item.id))}
          >
            ✖ Remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;