import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import { toast } from "react-toastify";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const [prices, setPrices] = useState(0);

  //   const handleAddToPrice = () => {
  //     console.log("Add to price");
  //   };
  const handleAddToCart = (tshirt, price) => {
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      //   const newCart = [...cart, tshirt];
      toast(`You have already been added this products "${tshirt.name}" `, {
        position: "top-center",
      });
    } else {
      //   const newCart = [...cart, tshirt];
      const totalPrice = prices + price;
      setPrices(totalPrice);
      setCart([...cart, tshirt]);
    }
  };
  const handleRemoveFromCart = (id, price) => {
    const minus = prices - price;
    setPrices(minus);
    const remaining = cart.filter((tshirt) => tshirt._id !== id);

    setCart(remaining);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-4 p-2">
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-2">
        {tshirts.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div>
        <Cart
          cart={cart}
          prices={prices}
          handleRemoveFromCart={handleRemoveFromCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
