import React from "react";

const Page5 = () => {
  return (
    <div id="page5">
      <h1>Appliances</h1>
      <p>Servicing, Repair, Installation & Uninstallation</p>
      <ul>
        <li className="cat1">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png"
            alt="Image"
            width="100%"
          />
          <p>Geyser</p>
          <small>Starts at ₹249</small>
        </li>
        <li className="cat2">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png"
            alt="Image"
            width="100%"
          />
          <p>Water Purifier Services</p>
          <small>Up to 45% Off</small>
        </li>
        <li className="cat3">
          <img
            src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg"
            alt="Image"
            width="100%"
          />
          <p>Buy RO Water Purifier</p>
          <small>Flat ₹100 off</small>
        </li>
      </ul>
    </div>
  );
};
export default Page5;
