import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <footer className="footer-bg">
    <div className="footer-top border-bottom padding-top-60 padding-bottom-40">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-logo">
              <Link>
                <Link to="/">
                  <h3>LOGO</h3>
                </Link>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-social">
              <ul className="social-icons">
                <li>
                  <Link>
                    <i data-feather="facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i data-feather="twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i data-feather="linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i data-feather="youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-widget-wrapper padding-bottom-60 padding-top-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6">
            <div className="footer-widget widget-about">
              <h4>About Us</h4>
              <div className="widget-inner">
                <p className="description">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
                <span className="about-contact">
                  <i data-feather="phone-forwarded"></i>+8 246-345-0698
                </span>
                <span className="about-contact">
                  <i data-feather="mail"></i>supportmail@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-sm-6">
            <div className="footer-widget footer-shortcut-link">
              <h4>Information</h4>
              <div className="widget-inner">
                <ul>
                  <li>
                    <Link>About Us</Link>
                  </li>
                  <li>
                    <Link>Contact Us</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link>Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget footer-shortcut-link">
              <h4>Job Seekers</h4>
              <div className="widget-inner">
                <ul>
                  <li>
                    <Link>Create Account</Link>
                  </li>
                  <li>
                    <Link>Career Counseling</Link>
                  </li>

                  <li>
                    <Link>FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget footer-shortcut-link">
              <h4>Employers</h4>
              <div className="widget-inner">
                <ul>
                  <li>
                    <Link>Create Account</Link>
                  </li>
                  <li>
                    <Link>Post a Job</Link>
                  </li>
                  <li>
                    <Link>FAQ</Link>
                  </li>
                </ul>
              </div>
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
                  <div className="footer-app-download">
                    {/* <Link className="apple-app">Apple Store</Link>
                    <Link className="android-app">Google Play</Link> */}
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 order-lg-1">
                  <p className="copyright-text">
                    Copyright <Link>Digital Bangladesh Vision</Link> 2020
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
