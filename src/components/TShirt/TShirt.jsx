import React from "react";

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { picture, name, price, gender } = tshirt;
  return (
    <div className="border-2 rounded-md p-2">
      <div>
        <div className="">
          <img className="h-64 w-64 rounded-md" src={picture} alt="" />
        </div>
        <div className="my-4">
          <h2>Name : {name}</h2>
          <p>Price : ${price}</p>
        </div>
      </div>
      <div className="my-auto p-0">
        <button
          onClick={() => handleAddToCart(tshirt, price)}
          className="bg-emerald-400 px-3 py-1 rounded-md w-full "
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default TShirt;
