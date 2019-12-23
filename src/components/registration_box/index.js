import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="section-padding-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="call-to-action-box candidate-box">
            <div className="icon">
              <img src={require("../../images/register-box/1.png")} alt="" />
            </div>
            <span>Are You</span>
            <h3>Candidate?</h3>
            <Link
              to="/register"
              data-toggle="modal"
              data-target="#exampleModalLong2"
            >
              Register Now <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="call-to-action-box employer-register">
            <div className="icon">
              <img src={require("../../images/register-box/2.png")} alt="" />
            </div>
            <span>Are You</span>
            <h3>Employer?</h3>
            <Link
              to="/register"
              data-toggle="modal"
              data-target="#exampleModalLong3"
            >
              Register Now <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
