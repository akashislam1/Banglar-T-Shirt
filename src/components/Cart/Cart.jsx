import React from "react";

const Cart = ({ cart, handleRemoveFromCart, prices }) => {
  return (
    <div>
      <h3 className="font-bold">Order Summary : {cart.length}</h3>
      {cart.map((tshirt) => (
        <div key={tshirt._id} className="flex gap-4">
          <div>
            <p>{tshirt.name} </p>
            <p>Price : {prices}</p>
          </div>

          <button
            onClick={() => handleRemoveFromCart(tshirt._id)}
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
