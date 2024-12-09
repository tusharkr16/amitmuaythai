import React from "react";
import "./ReadMoreIntro.css";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Jump from "react-reveal/Jump";

const ReadMoreIntro = () => {
  return (
    <>
      <section className="readMoreIntro__container">
        <div className="readMoreIntro__heading">
          <h1>About Plan IT</h1>
        </div>

        <div className="readMoreIntro__leftContainer">
          <Fade right>
            <h1 className="readMoreIntro__leftContainer__heading">
              The Ultimate Method to Change Your Life
            </h1>
          </Fade>

          <Fade down>
            <p className="readMoreIntro__leftContainer__description">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you. ​
            </p>

            <p className="readMoreIntro__leftContainer__description">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company.
            </p>
          </Fade>
        </div>

        <div className="readMoreIntro__left__leftContainer">
          <Fade up>
            <h1 className="readMoreIntro__left__leftContainer__heading">
              Why Plan IT
            </h1>
          </Fade>

          <div className="planGrid__container">
            <Fade left>
              <div className="planGrid__container__grid">
                <FitnessCenterIcon className="rotateIcon" />

                <span className="grid__icon__desc">Suitable for Beginners</span>
              </div>
            </Fade>

            <Fade right>
              <div className="planGrid__container__grid">
                <EventAvailableOutlinedIcon className="fitnessCenterIcon " />
                <span>Flexible Schedule</span>
              </div>
            </Fade>

            <Fade left>
              <div className="planGrid__container__grid">
                <PeopleAltOutlinedIcon className="fitnessCenterIcon" />
                <span>Personal Guidance</span>
              </div>
            </Fade>

            <Fade right>
              <div className="planGrid__container__grid">
                <TipsAndUpdatesIcon className="fitnessCenterIcon" />
                <span>Advanced Techniques</span>
              </div>
            </Fade>

            <Fade left>
              <div className="planGrid__container__grid">
                <MonitorWeightIcon className="fitnessCenterIcon" />
                <span>Proven Results</span>
              </div>
            </Fade>

            <Fade right>
              <div className="planGrid__container__grid">
                <WorkspacePremiumIcon className="fitnessCenterIcon" />
                <span>Professional Trainers</span>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="bannerImageContainer"></section>
    </>
  );
};

export default ReadMoreIntro;
