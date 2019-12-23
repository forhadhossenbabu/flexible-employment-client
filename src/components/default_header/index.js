import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <header className="header-2">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header-top">
              <div className="logo-area">
                <Link to="/">
                  <h3>LOGO</h3>
                </Link>
              </div>
              <div className="header-top-toggler">
                <div className="header-top-toggler-button"></div>
              </div>
              <div className="top-nav">
                <div className="dropdown header-top-account login-modals">
                  <button>
                    <Link to="/promoted-jobs">
                      <span className="ti-stats-up rp2"></span>Promoted Jobs
                    </Link>
                  </button>
                  <button>
                    <Link to="/login">Login</Link>
                  </button>
                  <button>
                    <Link to="/register">
                      Register Now
                      {/* <span className="ti-back-left"></span> */}
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <nav className="navbar navbar-expand-lg cp-nav-2">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="menu-item">
                    <Link to="/register">How It Works</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/news-advice">News & Advices</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/terms-condition">Terms And Condition</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact-support">Contact Support</Link>
                  </li>
                  <li className="menu-item post-job">
                    <Link to="/post-jobs">
                      <i className="fas fa-plus"></i>Post a Job
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
