import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const DashbordSideBar = props => {
  const { profile } = props.profile;
  const { user } = props.auth;
  return (
    <div className="dashboard-sidebar">
      <div className="company-info">
        <div className="thumb">
          <img
            src={profile.employe_profile.companeylogolink}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="company-body">
          <h5>{profile.employe_profile.companeyname}</h5>
          <span>{user.username}</span>
        </div>
      </div>
      <div className="profile-progress">
        <div className="progress-item">
          <div className="progress-head">
            <p className="progress-on">Profile</p>
          </div>
          <div className="progress-body">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0" }}
              ></div>
            </div>
            <p className="progress-to">70%</p>
          </div>
        </div>
      </div>
      <div className="dashboard-menu">
        <ul>
          <li>
            <i className="fas fa-home"></i>
            <NavLink to="/employer-dashbord" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <i className="fas fa-user"></i>
            <NavLink to="/employer-edit-profile">Edit Profile</NavLink>
          </li>
          <li>
            <i className="fas fa-briefcase"></i>
            <NavLink to="/employer-manage-job" activeClassName="active">
              Manage Jobs
            </NavLink>
          </li>
          <li>
            <i className="fas fa-users"></i>
            <NavLink to="/employer-manage-candidate">Manage Candidates</NavLink>
          </li>

          <li>
            <i className="fas fa-plus-square"></i>
            <NavLink to="/employer-post-job" activeClassName="active">
              Post New Job
            </NavLink>
          </li>
        </ul>
        <ul className="delete">
          <li>
            <i className="fas fa-power-off"></i>
            <a href="!#">Logout</a>
          </li>
          <li>
            <i className="fas fa-trash-alt"></i>
            <a href="!#" data-toggle="modal" data-target="#modal-delete">
              Delete Profile
            </a>
          </li>
        </ul>
        <div
          className="modal fade modal-delete"
          id="modal-delete"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <h4>
                  <i data-feather="trash-2"></i>Delete Account
                </h4>
                <p>
                  Are you sure! You want to delete your profile. This can't be
                  undone!
                </p>
                <form action="#">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="buttons">
                    <button className="delete-button">Save Update</button>
                    <button className="">Cancel</button>
                  </div>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">
                      You accepts our <a href="!#">Terms and Conditions</a> and{" "}
                      <a href="!#">Privacy Policy</a>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps)(DashbordSideBar);
