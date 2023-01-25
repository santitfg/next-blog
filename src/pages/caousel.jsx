import React from "react";

const Carrousel = () => {
  return (<><div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    <div className="carousel w-full">
    <div id="item1" className="carousel-item w-full">
      <img src="https://placeimg.com/800/200/arch" className="w-full" />
    </div> 
    <div id="item2" className="carousel-item w-full">
      <img src="https://placeimg.com/800/200/arch" className="w-full" />
    </div> 
    <div id="item3" className="carousel-item w-full">
      <img src="https://placeimg.com/800/200/arch" className="w-full" />
    </div> 
    <div id="item4" className="carousel-item w-full">
      <img src="https://placeimg.com/800/200/arch" className="w-full" />
    </div>
  </div> 
  <div className="flex justify-center w-full py-2 gap-2">
    <a href="#item1" className="btn btn-xs">1</a> 
    <a href="#item2" className="btn btn-xs">2</a> 
    <a href="#item3" className="btn btn-xs">3</a> 
    <a href="#item4" className="btn btn-xs">4</a>
  </div>
  </>
  );
};

export default Carrousel;
