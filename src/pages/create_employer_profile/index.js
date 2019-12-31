import React, { Component } from "react";
import { connect } from "react-redux";
import { create_new_profile } from "../../redux/_profile/action";

class CreateEmployerProfile extends Component {
  state = {
    companeyname: "",
    companeylogo: "",
    companeyemail: "",
    phone: "",
    location: "",
    companeytype: "",
    aboutcompaney: "",
    introvideolink: "",
    facebooklink: "",
    twitterlink: "",
    linkedinlink: "",
    companeysize: "",
    website: "",
    has_image: false,
    loading: false,
    errors: {}
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, errors: {} });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { state } = this;
    const { has_image } = this.state;
    const form_data = new FormData();

    if (has_image) {
      form_data.append("companeylogo", state.companeylogo);
      form_data.append("companeyname", state.companeyname);
      form_data.append("companeyemail", state.companeyemail);
      form_data.append("phone", state.phone);
      form_data.append("location", state.location);
      form_data.append("companeytype", state.companeytype);
      form_data.append("aboutcompaney", state.aboutcompaney);
      form_data.append("introvideolink", state.introvideolink);
      form_data.append("facebooklink", state.facebooklink);
      form_data.append("twitterlink", state.twitterlink);
      form_data.append("linkedinlink", state.linkedinlink);
      form_data.append("companeysize", state.companeysize);
      form_data.append("website", state.website);
      console.log("image found");
      this.props.create_new_profile(form_data, this.props.history);
    } else {
      const profile_data = { ...this.state };
      delete profile_data.has_image;
      this.props.create_new_profile(profile_data, this.props.history);
    }
  };

  uploadImage = e => {
    this.setState({ companeylogo: e.target.files[0], has_image: true });
  };
  componentWillReceiveProps(next_props) {
    if (this.props.info !== next_props.info) {
      if (next_props.info.loading) {
        this.setState({ loading: true });
      }
      if (!next_props.info.loading) {
        if (next_props.info.error) {
          this.setState({
            loading: false,
            errors: { ...next_props.info.errors }
          });
        }
      }
    }
  }

  render() {
    const { errors, loading } = this.state;
    return (
      <div className="padding-top-80 section-padding-bottom alice-bg">
        <div className="container no-gliters">
          <div className="row no-gliters">
            <div className="col">
              <div className="dashboard-container">
                <div className="dashboard-content-wrapper create-profile">
                  <form onSubmit={this.handleSubmit} className="dashboard-form">
                    <div className="dashboard-section upload-profile-photo">
                      <div className="update-photo">
                        <img
                          className="image"
                          src="dashboard/images/company-logo.png"
                          alt=""
                        />
                      </div>
                      <div className="file-upload">
                        <input
                          type="file"
                          className="file-input"
                          onChange={this.uploadImage}
                          name="companeylogo"
                        />
                        Change Avatar
                      </div>
                    </div>
                    <div className="dashboard-section basic-info-input">
                      <h4>
                        <i data-feather="user-check"></i>Basic Info
                      </h4>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Company Name
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            placeholder="Async Technology"
                            name="companeyname"
                            onChange={this.handleChange}
                            className={
                              errors.companeyname
                                ? "form-control error-border"
                                : "form-control"
                            }
                          />
                          {errors.companeyname && (
                            <small className="red">{errors.companeyname}</small>
                          )}
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Company Email Address
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="email@example.com"
                            name="companeyemail"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Phone</label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className={
                              errors.phone
                                ? "form-control error-border"
                                : "form-control"
                            }
                            placeholder="+8801755183368"
                            name="phone"
                            onChange={this.handleChange}
                          />
                          {errors.phone && (
                            <small className="red">{errors.phone}</small>
                          )}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Location
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Dhaka Bangladesh"
                            name="location"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Companey Type
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className={
                              errors.companeytype
                                ? "form-control error-border"
                                : "form-control"
                            }
                            placeholder="Software Development"
                            name="companeytype"
                            onChange={this.handleChange}
                          />
                          {errors.companeytype && (
                            <small className="red">{errors.companeytype}</small>
                          )}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Companey Size
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className={
                              errors.companeysize
                                ? "form-control error-border"
                                : "form-control"
                            }
                            placeholder="10-50"
                            name="companeysize"
                            onChange={this.handleChange}
                          />
                          {errors.companeysize && (
                            <small className="red">{errors.companeysize}</small>
                          )}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Companey Website
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            className={
                              errors.website
                                ? "form-control error-border"
                                : "form-control"
                            }
                            placeholder="10-50"
                            name="website"
                            onChange={this.handleChange}
                          />
                          {errors.website && (
                            <small className="red">{errors.website}</small>
                          )}
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          About Companey
                        </label>
                        <div className="col-sm-9">
                          <textarea
                            className={
                              errors.website
                                ? "form-control error-border"
                                : "form-control"
                            }
                            placeholder=""
                            name="aboutcompaney"
                            onChange={this.handleChange}
                          ></textarea>
                          {errors.aboutcompaney && (
                            <small className="red">
                              {errors.aboutcompaney}
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-section media-inputs">
                      <h4>
                        <i data-feather="image"></i>Intro &amp; Video
                      </h4>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Intro Video
                        </label>
                        <div className="col-sm-9">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <div className="input-group-text">Link</div>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="https://www.youtube.com/watch?v=ZRkdyjJ_489M"
                              name="introvideolink"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-section social-inputs">
                      <h4>
                        <i data-feather="cast"></i>Social Networks
                      </h4>
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Social Links
                        </label>
                        <div className="col-sm-9">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <i className="fab fa-facebook-f"></i>
                              </div>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="facebook.com/username"
                              name="facebooklink"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-3 col-sm-9">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <i className="fab fa-twitter"></i>
                              </div>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="twitter.com/username"
                              name="twitterlink"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-3 col-sm-9">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <i className="fab fa-linkedin"></i>
                              </div>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="linkedin.com/in/username"
                              name="linkedinlink"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-section basic-info-input">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label"></label>
                        <div className="col-sm-9">
                          {loading ? (
                            <h6>Loading...</h6>
                          ) : (
                            <button className="button">Create Profile</button>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  info: state.info
});

export default connect(mapStateToProps, { create_new_profile })(
  CreateEmployerProfile
);
