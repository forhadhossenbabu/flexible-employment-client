import React from "react";
import { Link } from "react-router-dom";

const length_array = new Array(15).fill("item");

export default () => (
  <div className="section-padding-top padding-bottom-90">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section-header">
            <h2>Top Companies</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="company-carousel owl-carousel">
            {length_array.map((item, idx) => (
              <div className="company-wrap" key={idx}>
                <div className="thumb">
                  <Link>
                    <img
                      src={require("../../images/company/company-logo-2.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="body">
                  <h4>
                    <a href="employer-details.html">Digoin</a>
                  </h4>
                  <span>Kansas City, Missouri</span>
                  <a href="job-listing.html" className="button">
                    4 Open Positions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
