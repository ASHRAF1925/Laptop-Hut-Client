import React, { Component } from "react";
import Slider from "react-slick";
import useWindowDimensions from "../../../Hooks/useWindow";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="card lg:card-side bg-base-100 shadow-xl w-full">
            <figure>
              <img className="w-3/4" src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </figure>
            <div className="card-body">
            <div className="my-auto mx-auto">
               <h1 className="text-3xl font-bold text-center">Choose Your Favourite Laptop</h1>
                <p className="mt-5 text-xl">We offer best laptop at Affortable Prices</p>
                <Link className="text-center mx-32 mt-10  btn btn-primary " to='/aboutus'>See More</Link>
               </div>
              
            
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="card lg:card-side bg-base-100 shadow-xl w-full">
            <figure>
              <img className="w-3/4"  src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="Album" />
            </figure>
            <div className="card-body">
            <div className="my-auto mx-auto">
               <h1 className="text-3xl font-bold text-center">Choose Your Favourite Laptop</h1>
                <p className="mt-5 text-xl">We offer best laptop at Affortable Prices</p>
                <Link className="text-center mx-32 mt-10  btn btn-primary " to='/aboutus'>See More</Link>
               </div>
            
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="card lg:card-side bg-base-100 shadow-xl w-full">
            <figure>
              <img className="w-3/4"  src="https://images.unsplash.com/photo-1501250987900-211872d97eaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Album" />
            </figure>
            <div className="card-body">
            <div className="my-auto mx-auto">
               <h1 className="text-3xl font-bold text-center">Choose Your Favourite Laptop</h1>
                <p className="mt-5 text-xl">We offer best laptop at Affortable Prices</p>
                <Link className="text-center mx-32 mt-10  btn btn-primary " to='/aboutus'>See More</Link>
               </div>
            
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="card lg:card-side bg-base-100 shadow-xl w-full">
            <figure>
              <img src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Album" />
            </figure>
            <div className="card-body">
            <div className="my-auto mx-auto">
               <h1 className="text-3xl font-bold text-center">Choose Your Favourite Laptop</h1>
                <p className="mt-5 text-xl">We offer best laptop at Affortable Prices</p>
                <Link className="text-center mx-32 mt-10  btn btn-primary " to='/aboutus'>See More</Link>
               </div>
            
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
