import React from "react";
import "../App.scss";
import SignupForm from "../components/signup";

export default class Signup extends React.Component {

  render() {
    return (
      <div className="App container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
              <h1 className="p-5"><img src={"./y_logo.png"} alt="Logo" /></h1>
              <div className="todo-app">
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
