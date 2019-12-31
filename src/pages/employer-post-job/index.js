import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { get_current_profile } from "../../redux/_profile/action";
import DashbordSideBar from "../../components/employer-dashbord-sldebar";

class EmployerDashbord extends React.Component {
  componentDidMount() {
    this.props.get_current_profile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let dashbord_content;
    if (profile === null || loading) {
      dashbord_content = (
        <div className="padding-top-80 section-padding-bottom alice-bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section-padding-150 error-page-wrap text-center white-bg">
                  <div className="icon">
                    <img
                      src={require("../../images/error.png")}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <h1>Loading...</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      if (Object.keys(profile).length > 0) {
        dashbord_content = (
          <div className="alice-bg section-padding-bottom section-padding-top">
            <div className="container no-gliters">
              <div className="row no-gliters">
                <div className="col">
                  <div className="dashboard-container">
                    <div className="dashboard-content-wrapper">
                      <form action="#" className="dashboard-form job-post-form">
                        <div className="dashboard-section basic-info-input">
                          <h4>
                            <i data-feather="user-check"></i>Post A Job
                          </h4>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">
                              Job Title
                            </label>
                            <div className="col-md-9">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your job title here"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-form-label">
                              Job Summery
                            </label>
                            <div className="col-md-9">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <select className="form-control">
                                      <option>Select Category</option>
                                      <option>Accounting / Finance</option>
                                      <option>Health Care</option>
                                      <option>Garments / Textile</option>
                                      <option>Telecommunication</option>
                                    </select>
                                    <i className="fa fa-caret-down"></i>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Job Location"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <select className="form-control">
                                      <option>Job Type</option>
                                      <option>Part Time</option>
                                      <option>Full Time</option>
                                      <option>Temperory</option>
                                      <option>Permanent</option>
                                      <option>Freelance</option>
                                    </select>
                                    <i className="fa fa-caret-down"></i>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <select className="form-control">
                                      <option>Experience (Optional)</option>
                                      <option>Less than 1 Year</option>
                                      <option>2 Year</option>
                                      <option>3 Year</option>
                                      <option>4 Year</option>
                                      <option>Over 5 Year</option>
                                    </select>
                                    <i className="fa fa-caret-down"></i>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Salary Range"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <select className="form-control">
                                      <option>Qualification</option>
                                      <option>Matriculation</option>
                                      <option>Intermidiate</option>
                                      <option>Gradute</option>
                                    </select>
                                    <i className="fa fa-caret-down"></i>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <select className="form-control">
                                      <option>Gender</option>
                                      <option>Male</option>
                                      <option>Female</option>
                                    </select>
                                    <i className="fa fa-caret-down"></i>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Vacancy"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group datepicker">
                                    <input
                                      type="date"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-form-label">
                              Job Description
                            </label>
                            <div className="col-md-9">
                              <textarea
                                id="mytextarea"
                                className="tinymce-editor tinymce-editor-1"
                                placeholder="Description text here"
                              ></textarea>
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-form-label">
                              Responsibilities
                            </label>
                            <div className="col-md-9">
                              <textarea
                                id="mytextarea2"
                                className="tinymce-editor tinymce-editor-2"
                                placeholder="Responsibilities (Optional)"
                              ></textarea>
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-form-label">
                              Education
                            </label>
                            <div className="col-md-9">
                              <textarea
                                id="mytextarea3"
                                className="tinymce-editor tinymce-editor-2"
                                placeholder="Education (Optional)"
                              ></textarea>
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-form-label">
                              Other Benefits
                            </label>
                            <div className="col-md-9">
                              <textarea
                                id="mytextarea4"
                                className="tinymce-editor tinymce-editor-2"
                                placeholder="Description text here"
                              ></textarea>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label">
                              Your Location
                            </label>
                            <div className="col-md-9">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <select className="form-control">
                                      <option>Country</option>
                                      <option>USA</option>
                                      <option>United Kindom</option>
                                      <option>Spain</option>
                                      <option>France</option>
                                      <option>Germany</option>
                                    </select>
                                    <i className="fa fa-caret-down"></i>
                                  </div>
                                  <div className="form-group">
                                    <select
                                      className="form-control"
                                      id="exampleFormControlSelect11"
                                    >
                                      <option>City</option>
                                      <option>New Work</option>
                                      <option>Washington D.C</option>
                                      <option>California</option>
                                      <option>Las Vegas</option>
                                    </select>
                                    <i className="fa fa-caret-down"></i>
                                  </div>
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Zip Code"
                                    />
                                  </div>
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Your Location"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="set-location">
                                    <h5>Pin Location</h5>
                                    <div
                                      id="map-area"
                                      className="contact-location"
                                    >
                                      <div
                                        className="cp-map"
                                        id="location"
                                        data-lat="40.713355"
                                        data-lng="-74.005535"
                                        data-zoom="10"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-form-label">
                              About Company
                            </label>
                            <div className="col-md-9">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Company Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Web Address"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <textarea
                                      className="form-control"
                                      placeholder="Company Profile"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-9 offset-md-3">
                              <div className="form-group terms">
                                <input
                                  className="custom-radio"
                                  type="checkbox"
                                  id="radio-4"
                                  name="termsandcondition"
                                />
                                <label htmlFor="radio-4">
                                  <span className="dot"></span> You accepts our{" "}
                                  <a href="#">Terms and Conditions</a> and{" "}
                                  <a href="#">Privacy Policy</a>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-md-3 col-form-label"></label>
                            <div className="col-md-9">
                              <button className="button">Post Your Job</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <DashbordSideBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        dashbord_content = (
          <div className="padding-top-60 padding-bottom-60 alice-bg">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="section-padding-150 error-page-wrap text-center white-bg">
                    <div className="icon">
                      <img
                        src={require("../../images/error.png")}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h3>Welcome {user.username}</h3>
                    <p>
                      You have not created your employement profile. To continue
                      please create your profile and then <br /> you will be
                      eligible to access the main dashbord
                    </p>
                    <Link className="button" to="/create-employer-profile">
                      Create Profile Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    return dashbord_content;
  }
}

const mapStateToProps = state => ({
  info: state.info,
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { get_current_profile })(
  EmployerDashbord
);
