import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Slider from "../slider/Slider";
const Navbar = () => {
  return (
    <section id="navBlock">
      <article>
        <Logo />
        <Menu />
      </article>
      <Slider />
    </section>
  );
};

export default Navbar;
