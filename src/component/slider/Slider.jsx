import React from "react";

const Slider = () => {
  return (
    <div className="slider">
      <a href="">Home / Delhi-Ncr</a>
      <h1>Home services, on demand.</h1>
      <aside>
        {/* <span>Delhi</span> */}
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_template/images/supply/partner-app-supply/1661338258375-6c99b1.png"
          class="HomeHeroComponent__flagImage--1Ynbu"
          alt=""
          height="18px"
          width="25px" className="flag"
        ></img>
        <select name="" id="dropDown">
          <option value="">New Delhi</option>
        </select>
        <input
          type="search"
          name=""
          id="searchBox"
          placeholder="Search for services"
        />
        <i class="fa-solid fa-magnifying-glass glass"></i>
        <br />
        <div class="linkBlock">
          <a href="">Women's Therapies</a>,&nbsp;
          <a href="">Salon for Men</a>,&nbsp;
          <a href="">Men's Therapies</a>&nbsp;etc
        </div>
      </aside>
    </div>
  );
};

export default Slider;
