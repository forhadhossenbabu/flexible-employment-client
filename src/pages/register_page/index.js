import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { register_user } from "../../redux/_auth/action";
import RegisterHeader from "../../components/login_register_header";

class RegisterPage extends React.Component {
  state = {
    role: null,
    username: null,
    email: null,
    password: null,
    agreed: false,
    errors: {},
    loading: false
  };

  handle_text_change = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, errors: {} });
  };

  handle_submit = e => {
    e.preventDefault();
    const { agreed } = this.state;
    const { history } = this.props;
    if (!agreed) return alert("Please accept the terms & conditions");

    const new_user_data = { ...this.state };
    delete new_user_data.errors;
    delete new_user_data.loading;
    this.setState({ loading: true });
    this.props.register_user(new_user_data, history);
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
    const { agreed, errors } = this.state;
    return (
      <React.Fragment>
        <RegisterHeader link="/login" linkName="Login" />
        <div className="access-page-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="access-form">
                  <div className="form-header">
                    <h5>
                      <i data-feather="edit"></i>Register New Account
                    </h5>
                  </div>
                  <div
                    className="account-type"
                    onChange={this.handle_text_change}
                  >
                    <label htmlFor="idRegisterCan">
                      <input
                        id="idRegisterCan"
                        type="radio"
                        name="role"
                        value="candidate"
                      />
                      <span>Candidate</span>
                    </label>
                    <label htmlFor="idRegisterEmp">
                      <input
                        id="idRegisterEmp"
                        type="radio"
                        name="role"
                        value="employe"
                      />
                      <span>Employer</span>
                    </label>
                  </div>
                  <form onSubmit={this.handle_submit}>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Username"
                        className={
                          errors.username || errors.user_name_exists
                            ? "form-control error-border"
                            : "form-control"
                        }
                        name="username"
                        onChange={this.handle_text_change}
                      />
                      {errors.username && (
                        <small className="red">{errors.username}</small>
                      )}
                      {errors.user_name_exists && (
                        <small className="red">{errors.user_name_exists}</small>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className={
                          errors.email || errors.email_already_exists
                            ? "form-control error-border"
                            : "form-control"
                        }
                        name="email"
                        onChange={this.handle_text_change}
                      />
                      {errors.email && (
                        <small className="red">{errors.email}</small>
                      )}
                      {errors.email_already_exists && (
                        <small className="red">
                          {errors.email_already_exists}
                        </small>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Password"
                        className={
                          errors.password
                            ? "form-control error-border"
                            : "form-control"
                        }
                        name="password"
                        onChange={this.handle_text_change}
                      />
                      {errors.password && (
                        <small className="red">{errors.password}</small>
                      )}
                    </div>
                    <div className="more-option terms">
                      <div className="mt-0 terms">
                        <input
                          className="custom-radio"
                          type="checkbox"
                          id="radio-4"
                          name="termsandcondition"
                          checked={agreed}
                          onClick={() => this.setState({ agreed: !agreed })}
                          onChange={() => this.setState({ agreed: !agreed })}
                        />
                        <label htmlFor="radio-4">
                          <span className="dot"></span> I accept the{" "}
                          <Link to="/term-condition">terms & conditions</Link>
                        </label>
                      </div>
                    </div>
                    <button
                      className="button primary-bg btn-block"
                      type="submit"
                    >
                      Register
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

const mapStateToProps = state => ({ info: state.info });

export default connect(mapStateToProps, {
  register_user: register_user
})(RegisterPage);
