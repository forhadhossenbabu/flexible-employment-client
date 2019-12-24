import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login_user } from "../../redux/_auth/action";
import LoginHeader from "../../components/login_register_header";

class Login extends React.Component {
  state = {
    email: null,
    password: null,
    loading: false,
    message: null,
    errors: {}
  };

  componentDidMount() {
    const { auth } = this.props;
    if (auth.is_authenticated && auth.role === "employe") {
      this.props.history.push("/employer-dashbord");
    }
    if (auth.is_authenticated && auth.role === "candidate") {
      this.props.history.push("/candidate-dashbord");
    }
  }

  handle_change = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      errors: {}
    });
  };

  handle_submit = e => {
    e.preventDefault();

    const user_data = { ...this.state };
    delete user_data.errors;
    delete user_data.loading;
    delete user_data.message;
    this.setState({ loading: true });
    this.props.login_user(user_data);
  };

  componentWillReceiveProps(next_props) {
    const { info, auth } = next_props;

    if (info.loading) {
      this.setState({ loading: true });
    }
    if (info.error) {
      this.setState({
        loading: false,
        errors: { ...info.errors }
      });
    }

    if (auth.is_authenticated && auth.role === "employe") {
      this.props.history.push("/employer-dashbord");
    }
    if (auth.is_authenticated && auth.role === "candidate") {
      this.props.history.push("/candidate-dashbord");
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <LoginHeader link="/register" linkName="Register" />
        <div className="access-page-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="access-form">
                  <div className="form-header">
                    <h5>
                      <i data-feather="user"></i>Login To Your Account
                    </h5>
                  </div>
                  <form onSubmit={this.handle_submit}>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        onChange={this.handle_change}
                        className={
                          errors.email || errors.user_not_found
                            ? "form-control error-border"
                            : "form-control"
                        }
                      />
                      {errors.email && (
                        <small className="red">{errors.email}</small>
                      )}
                      {errors.user_not_found && (
                        <small className="red">{errors.user_not_found}</small>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handle_change}
                        className={
                          errors.password || errors.wrong_password
                            ? "form-control error-border"
                            : "form-control"
                        }
                      />
                      {errors.wrong_password && (
                        <small className="red">{errors.wrong_password}</small>
                      )}
                      {errors.password && (
                        <small className="red">{errors.password}</small>
                      )}
                    </div>
                    <div className="more-option">
                      <div className="mt-0 terms">
                        <input
                          className="custom-radio"
                          type="checkbox"
                          id="radio-4"
                          name="termsandcondition"
                        />
                        <label htmlFor="radio-4">
                          <span className="dot"></span> Remember Me
                        </label>
                      </div>
                      <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    {errors.not_verified ? (
                      <div className="form-header2">
                        <h5>
                          <i data-feather="user"></i>
                          {errors.not_verified}
                        </h5>
                      </div>
                    ) : null}
                    {errors.bad_happed ? (
                      <div className="form-header2">
                        <h5>
                          <i data-feather="user"></i>
                          {errors.bad_happed}
                        </h5>
                      </div>
                    ) : null}

                    <button className="button primary-bg btn-block">
                      Login
                    </button>
                  </form>
                  <div className="shortcut-login">
                    <span>Or connect with</span>
                    <div className="buttons">
                      <Link className="facebook" to="/">
                        <i className="fab fa-facebook-f"></i>Facebook
                      </Link>
                      <Link className="google" to="/">
                        <i className="fab fa-google"></i>Google
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    info: state.info
  };
};

export default connect(mapStateToProps, {
  login_user: login_user
})(Login);
