import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Panel from "./Panel";
import "./Home.css"
import babyImg from "../../assets/baby.jpeg"
import toddlerImg from '../../assets/toddler.webp'
import littleKidImg from "../../assets/little_kid.avif"
import bigKidImg from "../../assets/big_kid.webp"
import {register} from 'swiper/element/bundle'
register()

export default function Home() {
  useEffect(() => {
    const swiperEl = document.querySelector('swiper-container');
    const swiperParams = {
      breakpoints: {
        1000: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 1,
        }
      }
    };
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }, [])
  
  return (
    <>
      <div className="cta-box">
        <div className="cta">
          <h2>Gently used clothes for all ages and sizes</h2>
          <Link to="/marketplace">{"Shop all clothes >"}</Link>
        </div>
      </div>
      <div className="cat-container">
        <h3 className="home-label">Style for every stage</h3>
        <div className="cat-box">
          <Link className="cat-link" to="/marketplace/baby">
            <img className="cat-img" src={babyImg} alt="A baby wearing a green sweater and overalls" />
            Baby (0 - 2)
          </Link>
          <Link className="cat-link" to="/marketplace/todler">
            <img className="cat-img" src={toddlerImg} alt="A toddler wearing jeans and a white t-shirt" />
            Toddler (2 - 4)
          </Link>
          <Link className="cat-link" to="/marketplace/little_kid">
            <img className="cat-img" src={littleKidImg} alt="A small kid wearing a striped longsleeve shirt" />
            Small Kid (5 - 7)
          </Link>
          <Link className="cat-link" to="/marketplace/big_kid">
            <img className="cat-img" src={bigKidImg} alt="A big kid wearing a red plaid shirt and a yellow hat" />
            Big Kid (8+)
          </Link>
        </div>
      </div>
      <div className="art-container">
        <h3 className="home-label">Browse by article type</h3>
        <swiper-container
          init="false"
          grab-cursor="true"
          navigation="true"
          loop="true"
        >
          <Panel path="" label="Tops/Tees" /> 
          <Panel path="" label="Pants" />
          <Panel path="" label="Activewear" />  
          <Panel path="" label="Formal" />  
          <Panel path="" label="Onesies" />   
          <Panel path="" label="Other" />  
        </swiper-container>
      </div>
    </>
  )
}
