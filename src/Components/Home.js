import React from "react";
import "../Scss/index.scss";
import Header from "./Header";
import Form from "./Form";
import Card from "./Card";
import ImageGallery from "./ImageGallery";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="wrapper">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <Form />
        </div>
        <hr className="dashed-line" />
        <Card />
        <ImageGallery />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
