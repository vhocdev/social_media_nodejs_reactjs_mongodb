import React from "react";
import axios from "axios";
import "../App.scss";
import LoginForm from "../components/login";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  handleLogin = (loginData) => {
    console.log(loginData);
    axios
      .post("/api/login", { loginData })
      .then(() => {
        // auth and navigate to posts
      })
      .catch((e) => console.log("Error : ", e));
  };

  render() {
    return (
      <div className="App container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
              <h1 className="p-5"><img src={"./y_logo.png"} alt="Logo" /></h1>
              <div className="todo-app">
                <LoginForm handleLogin={this.handleLogin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
