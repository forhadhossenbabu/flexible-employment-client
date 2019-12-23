import React from "react";
import { Link } from "react-router-dom";

export default ({ listed_job_number }) => (
  <div className="banner banner-3 banner-3-bg">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="banner-content">
            <h4>{listed_job_number} Job Listed</h4>
            <p>
              Create free account to find thousands Jobs, Employment & Career
              Opportunities around you!
            </p>

            <Link className="button" to="/upload-resume">
              Upload Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
