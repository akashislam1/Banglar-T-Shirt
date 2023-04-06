import React from "react";

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { picture, name, price } = tshirt;
  return (
    <div className="md:w-auto text-center md:text-left border-2 rounded-md p-2">
      <div>
        <>
          <img className="h-64 w-64 mx-auto rounded-md" src={picture} alt="" />
        </>
        <div className="my-4">
          <h2>Name : {name}</h2>
          <p>Price : ${price}</p>
        </div>
      </div>
      <div className="">
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
