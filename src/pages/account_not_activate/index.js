import React from "react";

import BigMessage from "../../components/big_message";

export default class extends React.Component {
  render() {
    return (
      <div>
        <BigMessage
          message="Account Successfuly Created"
          details="Please Verify The Email And Come Back. We Will Here For You"
          image={require("../../images/error.png")}
        />
      </div>
    );
  }
}
