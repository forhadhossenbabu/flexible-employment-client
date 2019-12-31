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
        const { employe_profile } = profile;
        dashbord_content = (
          <div className="alice-bg section-padding-bottom section-padding-top">
            <div className="container no-gliters">
              <div className="row no-gliters">
                <div className="col">
                  <div className="dashboard-container">
                    <div className="dashboard-content-wrapper">
                      <div className="dashboard-section user-statistic-block">
                        <div className="user-statistic">
                          <i data-feather="command"></i>
                          <h3>{employe_profile.totaljobposted}</h3>
                          <span>Total Job Posted</span>
                        </div>
                        <div className="user-statistic">
                          <i data-feather="file-text"></i>
                          <h3>{employe_profile.totalapplicationsubmit}</h3>
                          <span>Application Submit</span>
                        </div>
                        <div className="user-statistic">
                          <i data-feather="users"></i>
                          <h3>{employe_profile.callforinterview}</h3>
                          <span>Call for interview</span>
                        </div>
                      </div>

                      <div className="dashboard-section dashboard-recent-activity">
                        <h4 className="title">Recent Activity</h4>

                        {profile.activity.map(item => (
                          <div className="activity-list" key={item.activity_id}>
                            <i className="fas fa-bolt"></i>
                            <div className="content">
                              <h5>{item.activity_name}</h5>
                              <span className="time">5 hours ago</span>
                            </div>
                            <div className="close-activity">
                              <i className="fas fa-times"></i>
                            </div>
                          </div>
                        ))}
                      </div>
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
