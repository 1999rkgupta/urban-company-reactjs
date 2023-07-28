import React from 'react'

const FooterEnd = () => {
  return (
    <div id="fend">
      <section className="flogo">
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
          alt="Urban Company logo" height="50px"/>
      </section>
      <section className="fdec">
        <span>© 2014-22 UrbanClap Technologies India Pvt. Ltd.</span>
      </section>
      <section className="fsoc">
        <ul>
          <li>
            <a><i class="fa-brands fa-twitter"></i></a>
          </li>
          <li>
            <a><i class="fa-brands fa-facebook"></i></a>
          </li>
          <li>
            <a><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li>
            <a><i class="fa-brands fa-youtube"></i></a>
          </li>
          <li>
            <a><i class="fa-brands fa-linkedin"></i></a>
          </li>
          <li>
            <a><i class="fa-brands fa-pinterest-p"></i></a>
          </li>``
        </ul>
      </section>
      <section className="fgp">
        <img
          src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"
          alt="Play Store"
          height="50px"
        />
      </section>
      <section className="fip">
        <img
          src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"
          alt="App Store"
          height="50px"
        />
      </section>
    </div>
  );
}

export default FooterEnd