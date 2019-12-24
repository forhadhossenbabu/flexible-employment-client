import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { log_out_user } from "../../redux/_auth/action";

class DashbordHeader extends React.Component {
  render() {
    const { log_out_user, history } = this.props;
    return (
      <header className="header-2">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header-top">
                <div className="logo-area">
                  <h3>LOGO</h3>
                </div>
                <div className="header-top-toggler">
                  <div className="header-top-toggler-button"></div>
                </div>
                <div className="top-nav">
                  <div className="dropdown header-top-notification">
                    <a href="!#" className="notification-button">
                      Notification
                    </a>
                    <div className="notification-card">
                      <div className="notification-body">
                        <a href="home-2.html" className="notification-list">
                          <i className="fas fa-bolt"></i>
                          <p>Your Resume Updated!</p>
                          <span className="time">5 hours ago</span>
                        </a>
                        <a href="!#" className="notification-list">
                          <i className="fas fa-arrow-circle-down"></i>
                          <p>Someone downloaded resume</p>
                          <span className="time">11 hours ago</span>
                        </a>
                        <a href="!#" className="notification-list">
                          <i className="fas fa-check-square"></i>
                          <p>
                            You applied for Project Manager{" "}
                            <span>@homeland</span>
                          </p>
                          <span className="time">11 hours ago</span>
                        </a>
                        <a href="!#" className="notification-list">
                          <i className="fas fa-user"></i>
                          <p>You changed password</p>
                          <span className="time">5 hours ago</span>
                        </a>
                        <a href="!#" className="notification-list">
                          <i className="fas fa-arrow-circle-down"></i>
                          <p>Someone downloaded resume</p>
                          <span className="time">11 hours ago</span>
                        </a>
                      </div>
                      <div className="notification-footer">
                        <a href="!#">See all notification</a>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown header-top-account">
                    <a
                      href="!#"
                      className="account-button"
                      onClick={e => {
                        e.preventDefault();
                        log_out_user(history);
                      }}
                    >
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { log_out_user })(
  withRouter(DashbordHeader)
);
