import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="section-padding-bottom alice-bg">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section-header section-header-2 section-header-with-right-content">
            <h4>Recent Jobs</h4>
            <Link to="/browse-jobs" className="header-right">
              + Browse All Jobs
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="job-list">
            <div className="thumb">
              <Link to="/">
                <img
                  src="images/job/company-logo-1.png"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="body">
              <div className="content">
                <h4>
                  <Link to="/">Designer Required</Link>
                </h4>
                <div className="info">
                  <span className="company">
                    <Link>
                      <i data-feather="briefcase"></i>Theoreo
                    </Link>
                  </span>
                  <span className="office-location">
                    <Link>
                      <i data-feather="map-pin"></i>New York City
                    </Link>
                  </span>
                  <span className="job-type full-time">
                    <Link>
                      <i data-feather="clock"></i>Full Time
                    </Link>
                  </span>
                </div>
              </div>
              <div className="more">
                <div className="buttons">
                  <Link
                    className="button"
                    data-toggle="modal"
                    data-target="#apply-popup-id"
                  >
                    Apply Now
                  </Link>
                  <Link className="favourite">
                    <i data-feather="heart"></i>
                  </Link>
                </div>
                <p className="deadline">Deadline: Oct 31, 2019</p>
              </div>
            </div>
          </div>
          <div className="job-list">
            <div className="thumb">
              <Link>
                <img
                  src="images/job/company-logo-2.png"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="body">
              <div className="content">
                <h4>
                  <Link>Project Manager</Link>
                </h4>
                <div className="info">
                  <span className="company">
                    <Link>
                      <i data-feather="briefcase"></i>Degoin
                    </Link>
                  </span>
                  <span className="office-location">
                    <Link>
                      <i data-feather="map-pin"></i>San Francisco
                    </Link>
                  </span>
                  <span className="job-type part-time">
                    <Link>
                      <i data-feather="clock"></i>Part Time
                    </Link>
                  </span>
                </div>
              </div>
              <div className="more">
                <div className="buttons">
                  <Link
                    className="button"
                    data-toggle="modal"
                    data-target="#apply-popup-id"
                  >
                    Apply Now
                  </Link>
                  <Link className="favourite">
                    <i data-feather="heart"></i>
                  </Link>
                </div>
                <p className="deadline">Deadline: Oct 31, 2019</p>
              </div>
            </div>
          </div>
          <div className="job-list">
            <div className="thumb">
              <Link>
                <img
                  src="images/job/company-logo-8.png"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="body">
              <div className="content">
                <h4>
                  <Link>Restaurant Team Member - Crew </Link>
                </h4>
                <div className="info">
                  <span className="company">
                    <Link>
                      <i data-feather="briefcase"></i>Geologitic
                    </Link>
                  </span>
                  <span className="office-location">
                    <Link>
                      <i data-feather="map-pin"></i>New Orleans
                    </Link>
                  </span>
                  <span className="job-type temporary">
                    <Link>
                      <i data-feather="clock"></i>Temporary
                    </Link>
                  </span>
                </div>
              </div>
              <div className="more">
                <div className="buttons">
                  <Link
                    className="button"
                    data-toggle="modal"
                    data-target="#apply-popup-id"
                  >
                    Apply Now
                  </Link>
                  <Link className="favourite">
                    <i data-feather="heart"></i>
                  </Link>
                </div>
                <p className="deadline">Deadline: Oct 31, 2019</p>
              </div>
            </div>
          </div>
          <div className="job-list">
            <div className="thumb">
              <Link>
                <img
                  src="images/job/company-logo-9.png"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="body">
              <div className="content">
                <h4>
                  <Link>Nutrition Advisor</Link>
                </h4>
                <div className="info">
                  <span className="company">
                    <Link>
                      <i data-feather="briefcase"></i>Theoreo
                    </Link>
                  </span>
                  <span className="office-location">
                    <Link>
                      <i data-feather="map-pin"></i>New York City
                    </Link>
                  </span>
                  <span className="job-type full-time">
                    <Link>
                      <i data-feather="clock"></i>Full Time
                    </Link>
                  </span>
                </div>
              </div>
              <div className="more">
                <div className="buttons">
                  <Link
                    className="button"
                    data-toggle="modal"
                    data-target="#apply-popup-id"
                  >
                    Apply Now
                  </Link>
                  <Link className="favourite">
                    <i data-feather="heart"></i>
                  </Link>
                </div>
                <p className="deadline">Deadline: Oct 31, 2019</p>
              </div>
            </div>
          </div>
          <div className="job-list">
            <div className="thumb">
              <Link>
                <img
                  src="images/job/company-logo-10.png"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="body">
              <div className="content">
                <h4>
                  <Link>UI Designer</Link>
                </h4>
                <div className="info">
                  <span className="company">
                    <Link>
                      <i data-feather="briefcase"></i>Degoin
                    </Link>
                  </span>
                  <span className="office-location">
                    <Link>
                      <i data-feather="map-pin"></i>San Francisco
                    </Link>
                  </span>
                  <span className="job-type part-time">
                    <Link>
                      <i data-feather="clock"></i>Part Time
                    </Link>
                  </span>
                </div>
              </div>
              <div className="more">
                <div className="buttons">
                  <Link
                    className="button"
                    data-toggle="modal"
                    data-target="#apply-popup-id"
                  >
                    Apply Now
                  </Link>
                  <Link className="favourite">
                    <i data-feather="heart"></i>
                  </Link>
                </div>
                <p className="deadline">Deadline: Oct 31, 2019</p>
              </div>
            </div>
          </div>
          <div className="job-list">
            <div className="thumb">
              <Link>
                <img
                  src="images/job/company-logo-3.png"
                  className="img-fluid"
                  alt=""
                />
              </Link>
            </div>
            <div className="body">
              <div className="content">
                <h4>
                  <Link>Land Development Marketer</Link>
                </h4>
                <div className="info">
                  <span className="company">
                    <Link>
                      <i data-feather="briefcase"></i>Realouse
                    </Link>
                  </span>
                  <span className="office-location">
                    <Link>
                      <i data-feather="map-pin"></i>Washington, D.C.
                    </Link>
                  </span>
                  <span className="job-type freelance">
                    <Link>
                      <i data-feather="clock"></i>Freelance
                    </Link>
                  </span>
                </div>
              </div>
              <div className="more">
                <div className="buttons">
                  <Link
                    className="button"
                    data-toggle="modal"
                    data-target="#apply-popup-id"
                  >
                    Apply Now
                  </Link>
                  <Link className="favourite">
                    <i data-feather="heart"></i>
                  </Link>
                </div>
                <p className="deadline">Deadline: Oct 31, 2019</p>
              </div>
            </div>
          </div>
          <div className="apply-popup">
            <div
              className="modal fade"
              id="apply-popup-id"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      <i data-feather="edit"></i>APPLY FOR THIS JOB
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form action="#">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="form-group file-input-wrap">
                        <label for="up-cv">
                          <input id="up-cv" type="file" />
                          <i data-feather="upload-cloud"></i>
                          <span>
                            Upload your resume <span>(pdf,zip,doc,docx)</span>
                          </span>
                        </label>
                      </div>
                      <div className="more-option">
                        <input
                          className="custom-radio"
                          type="checkbox"
                          id="radio-4"
                          name="termsandcondition"
                        />
                        <label for="radio-4">
                          <span className="dot"></span> I accept the{" "}
                          <Link>terms & conditions</Link>
                        </label>
                      </div>
                      <button className="button primary-bg btn-block">
                        Apply Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
