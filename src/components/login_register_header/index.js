import React from "react";
import { Link } from "react-router-dom";

export default ({ link, linkName }) => (
  <header className="header-2 access-page-nav">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="header-top">
            <div className="logo-area">
              <Link to="/">
                <h3>LOGO</h3>
              </Link>
            </div>
            <div className="top-nav">
              <Link className="account-page-link" to={link}>
                {linkName}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);
