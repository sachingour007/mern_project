import React from "react";
import aboutimg from "../asset/images/loginFromImg.png";

const About = () => {
  return (
    <section className="aboutSection">
      <div className="wrapper">
        <div className="aboutInfo">
          <h3>
            Welcome, <span>Sachin Gour</span>
          </h3>
          <h2>Why Choose Us?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            cum ratione illo, odio, obcaecati quod tenetur nemo doloribus
            explicabo, molestias pariatur. Quisquam odio dignissimos
            voluptatibus magni nemo laboriosam et odit ut. Ipsum illum
            explicabo, quam quos aspernatur perferendis nostrum quis cupiditate
            qui nesciunt magnam officia eveniet beatae non fuga eaque unde
            numquam voluptate ex vero ratione porro sint. Dolor consequatur
            placeat enim dignissimos amet quia perspiciatis commodi, accusamus
            ducimus ipsam architecto animi ad, earum suscipit natus aperiam eius
            aliquid! Perferendis et cupiditate veritatis voluptate officiis
            saepe reprehenderit vero iste provident impedit facere nemo,
            necessitatibus quas nesciunt, odio exercitationem rerum repudiandae.
          </p>
          <a href="">
            <button>Contact Us</button>
          </a>
          <a href="">
            <button>Learn More</button>
          </a>
        </div>
        <div className="aboutImg">
          <img src={aboutimg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
