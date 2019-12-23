import React from "react";

export default ({ message, details, image }) => (
  <div className="padding-top-80 section-padding-bottom alice-bg">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section-padding-150 error-page-wrap text-center white-bg">
            <div className="icon">
              <img src={image} className="img-fluid" alt="" />
            </div>
            <h3>{message}</h3>
            <h4>{details}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
);
