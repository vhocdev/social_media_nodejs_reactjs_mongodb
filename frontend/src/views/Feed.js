import React from "react";
import axios from "axios";
import "../App.scss";
import AddPost from "../components/feed/AddPost";
import PostList from "../components/feed/PostList";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api")
      .then((response) => {
        this.setState({
          posts: response.data.data,
        });
      })
      .catch((e) => console.log("Error : ", e));
  }

  handleAddPost = (value) => {
    axios
      .post("/api/posts", { title: value.title, description: value.description })
      .then(() => {
        this.setState({
          posts: [...this.state.posts, { title: value.title, description: value.description }],
        });
      })
      .catch((e) => console.log("Error : ", e));
  };

  render() {
    return (
      <div className="App container">
        <div className="container-fluid">
        <h1 className="p-5"><img src={"./y_logo.png"} alt="Logo" /></h1>
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
              <h1>Posts</h1>
              <div className="todo-app">
                <AddPost handleAddPost={this.handleAddPost} />
              </div>
              <div className="todo-app mt-3">
                <PostList posts={this.state.posts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
