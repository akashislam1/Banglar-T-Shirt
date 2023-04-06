import React from "react";

const Cart = ({ cart, handleRemoveFromCart, prices }) => {
  return (
    <div className="p-2">
      <h3 className="font-bold">Order Summary : {cart.length}</h3>
      <p className="font-bold">Price : {prices}</p>
      {cart.map((tshirt) => (
        <div key={tshirt._id} className="flex gap-4">
          <div>
            <p>{tshirt.name} </p>
          </div>

          <button
            onClick={() => handleRemoveFromCart(tshirt._id, tshirt.price)}
            className="font-bold text-red-500"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
