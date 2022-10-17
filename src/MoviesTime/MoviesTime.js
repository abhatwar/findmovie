import React from 'react'
import avenger from '../Assests/avenger.webp';
import kgf from '../Assests/kgf.jpg';
import rrr from '../Assests/rrr.webp';

const MoviesTime =()=> {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={avenger} alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={kgf} alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={rrr} alt="Third slide"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  )
}
export default MoviesTime;
