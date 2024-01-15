import React from "react";

export default class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  handleActive(index) {
    this.setState({
      activeIndex: index,
    });
  }

  renderPosts(posts) {
    return (
      <ul className="list-group">
        {posts.map((post, i) => (
          <li
            className={
              `list-group-item cursor-pointer ${i === this.state.activeIndex ? "active" : ""}`
            }
            key={i}
            onClick={() => {
              this.handleActive(i);
            }}
          >
            <div className="text-left">{post.title}</div>
            <div className="text-left">{post.description}</div>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let { posts } = this.props;
    return posts.length > 0 ? (
      this.renderPosts(posts)
    ) : (
      <div className="alert alert-primary" role="alert">
        No posts to display
      </div>
    );
  }
}
