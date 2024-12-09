import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import {
  faInstagram,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { NavLink } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer ">
        <div className="logo-footer">
          <NavLink to="/" className="lfooter">
            Plan IT
          </NavLink>{" "}
        </div>
        <div className="footer-social-icons">
          <ul class="social-icons">
            <li className="icons">
              <NavLink to="#" className="a-nav">
                <FontAwesomeIcon icon={faEnvelope} className="s-icon" />
              </NavLink>
            </li>
            <li className="icons">
              <NavLink to="#" className="a-nav">
                <FontAwesomeIcon icon={faWhatsapp} className="s-icon" />
              </NavLink>
            </li>
            <li className="icons">
              <NavLink to="#" className="a-nav">
                <FontAwesomeIcon icon={faLinkedinIn} className="s-icon" />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Copyright @2021 DTU.</p>

          <div className="dummy-text">
            <ul>
              <li>
                <NavLink to="#" className="text">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text">
                  Privacy Policy
                </NavLink>
              </li>

              <li>
                <NavLink to="#" className="text">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="a-about">
          <NavLink to="/About" className="about">
            About
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
