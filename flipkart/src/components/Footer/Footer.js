import React from "react";
import "./Footer.css";
import f1 from "../../images/footer/f1.svg";
import f2 from "../../images/footer/f2.svg";
import f3 from "../../images/footer/f3.svg";
import f4 from "../../images/footer/f4.svg";
import f10 from "../../images/footer/f10.svg";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer_top">
          <div className="footer__containerTop">
            <div className="footer__containerLeft">
              <ul>
                <h4>ABOUT</h4>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Flipkart Stories</li>
                <li>Press</li>
                <li>Flipkart Wholesale</li>
                <li>Corporate Information</li>
              </ul>

              <ul>
                <h4>HELP</h4>
                <li>Payments</li>
                <li>Shipping</li>
                <li>Cancellation & Returns</li>
                <li>FAQ</li>
                <li>Report Infringement</li>
              </ul>

              <ul>
                <h4>POLICY</h4>
                <li>Return Policy</li>
                <li>Terms Of Use</li>
                <li>Security</li>
                <li>Privacy</li>
                <li>Sitemap</li>
                <li>EPR Compliance</li>
              </ul>

              <ul>
                <h4>SOCIAL</h4>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>YouTube</li>
              </ul>
            </div>
            <div className="footer__containerRight">
              <ul>
                <h4>Mail Us</h4>
                <li>Flipkart Internet Private Limited</li>
                <li>Building Alyssa, Begonia &</li>
                <li>Clove Embassy Tech Village,</li>
                <li>Outer Ring Road, Devarabeesanahalli Village,</li>
                <li>Bengaluru, 560103,</li>
                <li>Karnataka, India</li>
              </ul>

              <ul>
                <h4>Registered Office Address:</h4>
                <li>Flipkart Internet Private Limited</li>
                <li>Building Alyssa, Begonia &</li>
                <li>Clove Embassy Tech Village,</li>
                <li>Outer Ring Road, Devarabeesanahalli Village,</li>
                <li>Bengaluru, 560103,</li>
                <li>Karnataka, India</li>
                <li>CIN : U51109KA2012PTC066107</li>
                <li>Telephone: 1800 208 9898</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer__containerBottom">
            <ul>
              <li>
                <img src={f1} /> <span>Become a Seller</span>
              </li>
              <li>
                <img src={f2} /> <span>Advertise</span>
              </li>
              <li>
                <img src={f3} /> <span>Gifts Cards</span>
              </li>
              <li>
                <img src={f4} /> <span>Help Center</span>
              </li>
              <li>© 2007-2020 Flipkart.com</li>
              <li>
                <img src={f10} />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
