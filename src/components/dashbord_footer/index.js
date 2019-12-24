import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <footer className="footer-bg">
    <div className="footer-top border-bottom  padding-bottom-40">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-logo">
              <h3>LOGO</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-social">
              <ul className="social-icons">
                <li>
                  <Link to="/">
                    <i data-feather="facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i data-feather="twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i data-feather="linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i data-feather="instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i data-feather="youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom-area">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer-bottom border-top">
              <div className="row">
                <div className="col-xl-4 col-lg-5 order-lg-2">
                  {/* <div className="footer-app-download">
                    <Link className="apple-app">Apple Store</Link>
                    <Link className="android-app">Google Play</Link>
                  </div> */}
                </div>
                <div className="col-xl-4 col-lg-4 order-lg-1">
                  <p className="copyright-text">
                    Copyright <Link to="/">Digital Bangladesh Vision</Link> 2020
                    <br />
                    All right reserved by{" "}
                    <Link to="findforhad.github.io">
                      Engineer Forhad Chowdhury
                    </Link>
                  </p>
                </div>
                <div className="col-xl-4 col-lg-3 order-lg-3">
                  <div className="back-to-top">
                    <a href="!#">
                      Back to top<i className="fas fa-angle-up"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
