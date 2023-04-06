import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div className=" w-full md:w-3/4 mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Main;
