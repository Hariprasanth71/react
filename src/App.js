import React, { Component } from "react";
import DataForm from "./component/dataform";

class App extends Component {
  render() {
    return (
      <center>
        <div className="container">
          <h1>User Registration List App</h1>
          <DataForm />
        </div>
      </center>
    );
  }
}

export default App;
