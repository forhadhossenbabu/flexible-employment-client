import React from "react";
import axios from "axios";
import BigMessage from "../../components/big_message";
import { api_url } from "../../config";

export default class extends React.Component {
  state = {
    loading: true,
    message: ""
  };

  async componentDidMount() {
    const token = this.props.match.params.token;
    this.setState({ loading: true });
    await axios
      .post(`${api_url}/api/verify-email/${token}`)
      .then(resp => {
        if (resp.status === 200 && resp.data.status) {
          this.setState({
            loading: false,
            message: resp.data.message
          });
        }
      })
      .catch(err => {
        this.setState({ loading: false, message: err.response.data.message });
      });
  }

  render() {
    const { loading, message } = this.state;

    if (loading) {
      return (
        <BigMessage
          message="Loading.."
          image={require("../../images/error.png")}
        />
      );
    } else {
      return (
        <BigMessage
          message={message}
          image={require("../../images/error.png")}
        />
      );
    }
  }
}
