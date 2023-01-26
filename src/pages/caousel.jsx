import React from "react";
import fs from "fs";
import Carousel from "@/components/carousel";

const Carrousel = () => {
  // const images = [
  //   "https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  //   "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  //   "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  // ];
const images = ['/imgs/micrones/04.jpg', '/imgs/micrones/05.jpg',
'/imgs/micrones/06.jpg','/imgs/micrones/07.jpg','/imgs/micrones/10.jpg','/imgs/micrones/12.jpg',
'/imgs/micrones/14.jpg',]

  return (
    <>
      <p> holi</p>
      <div className="w-1/3 inline-block">
        <Carousel images={images} />
      </div> <div className="w-1/3 inline-block">
        <Carousel images={images} />
      </div>   <p> holi</p>

    </>
  );
};

export default Carrousel;
