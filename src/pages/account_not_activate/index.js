import React from "react";

import BigMessage from "../../components/big_message";

export default class extends React.Component {
  render() {
    return (
      <div>
        <BigMessage
          message="Email Is Not Verified"
          details="Please Verify The Email And Come Back. We Will Here For You"
          image={require("../../images/error.png")}
        />
      </div>
    );
  }
}
