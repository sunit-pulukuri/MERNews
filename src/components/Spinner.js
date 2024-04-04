import React, { Component } from "react";
import loading from "../loading.gif";
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center" >
        <img className="my-3" style={{height:"54px"}} src={loading} alt="loading" />
      </div>
    );
  }
}
