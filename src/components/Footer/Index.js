import React from "react";
import "./style.css";
import Truck from "../../assets/foof-truck.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <div className="footer-child1">
          <img src={Truck} alt="" />
        </div>
        <div className="footer-child2">
          <div className="footer-heading">Contact Us</div>
          <div className="footer-subheading">
            <div>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </div>
            <div>example2020@gmail.com</div>
            <div>(904) 443-0343</div>
          </div>
        </div>
        <div className="footer-child3">
          <div className="footer-heading">More</div>
          <div className="footer-subheading">
            <div>About Us</div>
            <div>Products</div>
            <div>Career</div>
            <div>Contact Us</div>
          </div>
        </div>
        <div className="footer-child4">
          <div className="footer-heading">Social Links</div>
          <div className="footer-subheading footer-icon">
            <div>
              <img src={Instagram} alt="" />
            </div>
            <div>
              <img src={Facebook} alt="" />
            </div>
            <div>
              <img src={Twitter} alt="" />
            </div>
          </div>

          <div className="copyright">© 2022 Food Truck Example</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
