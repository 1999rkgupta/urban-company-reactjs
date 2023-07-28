import React from "react";

const Page4 = () => {
  return (
    <div id="page4">
      <h1>New Category Launches</h1>
      <ul>
        <li className="cat1">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg"
            alt="Image"
            width="100%"
          />
          <p>Expert Counselling</p>
          <small>Advanced Skin Treatments</small>
        </li>
        <li className="cat2">
          <figure>
            {/* <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg" alt="Image" width="95%"/> */}
          </figure>
          <p>Furniture Making, Upholstery &amp; Polish</p>
        </li>
        <li className="cat3">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg"
            alt="Image"
            width="100%"
          />
          <p>Air Purifier</p>
          <small>Flat ₹100 off</small>
        </li>
        <li className="cat4">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg"
            alt="Image"
            width="100%"
          />
          <p>Buy RO Water Purifier</p>
        </li>
      </ul>
    </div>
  );
};
export default Page4;
