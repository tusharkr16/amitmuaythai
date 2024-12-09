import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Jump from "react-reveal/Jump";

import BackgroundImage2 from "../../assets/Images/backgroundImage2.jpg";
import BackgroundVideo2 from "../../assets/video/backgroundVideo2.mp4";

import CardImage1 from "../../assets/Images/cardImage1.jpg";
import CardImage3 from "../../assets/Images/cardImage3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

import "./home.css";
import { Link } from "react-router-dom";

const Home1 = () => {
  // implement goToTop() function
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Home Page 1 */}

      <section className="homeContainer1">
        <div className="leftContainer">
          <Jump>
            <h1 className="homeTitle">Plan IT</h1>
          </Jump>

          <Fade up>
            <p className="homeDescription">Discover Your Power</p>
          </Fade>

          <Fade up>
            <p className="homeDescription">Through Online Coaching</p>
          </Fade>
          <div className="socialHandles">
            <NavLink to="#" className="a-nav">
              <FontAwesomeIcon icon={faInstagram} className="s-icon" />
            </NavLink>

            <NavLink to="#" className="a-nav">
              <FontAwesomeIcon icon={faWhatsapp} className="s-icon" />
            </NavLink>

            <NavLink to="#" className="a-nav">
              <FontAwesomeIcon icon={faFacebook} className="s-icon" />
            </NavLink>

            <NavLink to="#" className="a-nav">
              <FontAwesomeIcon icon={faTwitter} className="s-icon" />
            </NavLink>
          </div>
        </div>

        <div className="bottomRightContainer">
          <div className="left">Discover PlanIT</div>
          <div className="right">Book a Class</div>
        </div>
      </section>

      {/* Home Page 2 */}

      <section className="homeContainer2">
        <div className="outerContainer">
          <Pulse>
            <img className="backgroundImage2" src={BackgroundImage2} alt="" />
          </Pulse>
          <div className="innerContainer">
            <Slide left>
              <h1 className="innerContainer__heading">Hi, I’m Emily</h1>
            </Slide>

            <Fade left>
              <h2 className="innerContainer__subHeading">
                Certified Fitness Trainer and Personal Coach
              </h2>
            </Fade>

            <Fade up>
              <p className="innerContainer__description">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </Fade>

            <div className="readMore__button">
              <NavLink
                to="/api/v1/read-more"
                onClick={goToTop}
                className="button"
              >
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Home Page 3 */}

      <section className="homeContainer3">
        <div className="outerContainer3">
          <Pulse>
            <video
              src={BackgroundVideo2}
              width="900"
              height="500"
              autoplay="true"
              loop="true"
              muted="true"
            />
          </Pulse>
          <div className="innerContainer3">
            <Slide left>
              <h1 className="innerContainer__heading3">Introducing Plan IT</h1>
            </Slide>

            <Fade left>
              <h2 className="innerContainer__subHeading3">
                The Ultimate Method to Change Your Life
              </h2>
            </Fade>

            <Fade up>
              <p className="innerContainer__description3">
                Introducing FoxFit The Ultimate Method to Change Your Life I'm a
                paragraph. Click here to add your own text and edit me. It’s
                easy. Just click “Edit Text” or double click me to add your own
                content and make changes to the font. I’m a great place for you
                to tell a story and let your users know a little more about you.
              </p>
            </Fade>

            <div className="readMore__button3">
              <NavLink
                to="/api/v1/read-more-intro"
                onClick={goToTop}
                className="button3"
              >
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Home Page 4 */}

      <section className="homeContainer4">
        <h1 className="homeContainer4__heading">Our Products</h1>
        <div className="homeContainer4__cardContainer">
          <Fade up>
            <div className="cardContainer__card">
              <div className="card__image">
                <img className="card_random" src={CardImage1} alt="" />
              </div>
              <h1 className="cardDescription__heading">Interect with Emily</h1>
              <div className="cardButton">Book Now</div>
            </div>
          </Fade>

          <Fade up>
            <div className="cardContainer__card">
              <div className="card__image">
                <img className="card_random" src={CardImage3} alt="" />
              </div>
              <h1 className="cardDescription__heading">Plan it Own</h1>
              <Link
                style={{ textDecoration: "none" }}
                onClick={() => console.log("Clicked!")}
                to="/api/v1/consulting-form"
                className="cardButton"
              >
                Book Now
              </Link>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Home1;
