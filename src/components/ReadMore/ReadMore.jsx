import React from "react";
import "./ReadMore.css";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Jump from "react-reveal/Jump";

import ReadMore__RightImage from "../../assets/Images/readMore__RightImage.jpg";

const ReadMore = () => {
  return (
    <>
      <section className="readMore__container">
        <div className="readMore__heading">
          <h1>Meet Emily</h1>
        </div>

        <div className="readMore__leftContainer">
          <Slide right>
            <h1 className="readMore__leftContainer__heading">
              Certified Fitness Trainer and Personal Coach
            </h1>
          </Slide>

          <Fade down>
            <p className="readMore__leftContainer__description">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </Fade>
          <div className="readMore__bookClass">Book Class</div>
        </div>

        <Pulse>
          <img
            className="readMore__RightImage"
            src={ReadMore__RightImage}
            // src="https://static.wixstatic.com/media/375882_3978f1dda10b4935b77ee4d2e88ca091~mv2_d_10368_6222_s_4_2.jpg/v1/crop/x_527,y_13,w_8889,h_6171/fill/w_1037,h_720,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/emily_sitting.jpg"
            // alt=""
          />
        </Pulse>

        <div className="readMore__left__leftContainer">
          <Slide left>
            <h1 className="readMore__left__leftContainer__heading">
              My Vision
            </h1>
          </Slide>

          <Fade up>
            <p className="readMore__left__leftContainer__description">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default ReadMore;
