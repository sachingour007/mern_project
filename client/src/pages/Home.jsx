import React from "react";
import homeimg from "../asset/images/loginFromImg.png";

const Home = () => {
  return (
    <>
      <section className="homeSection">
        <div className="wrapper">
          <div className="homeInfo">
            <p>We are the World Best IT Company</p>
            <h1>Welcome to Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt
              culpa aliquid inventore, modi, praesentium veritatis ex deserunt
              eligendi repudiandae dignissimos hic quod delectus cum fuga
              dolorem. Ducimus, illum in.
            </p>

            <a href="">
              <button>Contact Us</button>
            </a>
            <a href="">
              <button>Learn More</button>
            </a>
          </div>
          <div className="homeImage">
            <img src={homeimg} alt="" />
          </div>
        </div>
      </section>
      <section className="counterSection">
        <div className="wrapper">
            
        </div>
      </section>
    </>
  );
};

export default Home;
