import React, { Component } from "react";
import Navbar from "./component/header/Navbar";
import Services from "./component/slider/Services";
import Slider2 from "./component/slider/Slider2";
import Page3 from "./component/main/Page3";
import Page4 from "./component/main/Page4";
import Page5 from "./component/main/Page5";
import Page6 from "./component/main/Page6";
import Page7 from "./component/main/Page7";
import Page8 from "./component/main/Page8";
import Page9 from "./component/main/Page9";
import Page10 from "./component/main/Page10";
import Page11 from "./component/main/Page11";
import Page12 from "./component/main/Page12";
import Footer from "./component/Footer/Footer";
export default class app extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Services />
        <Slider2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
        <Page12 />
        <Footer />
      </div>
    );
  }
}
