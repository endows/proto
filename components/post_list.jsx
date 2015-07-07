PostList = React.createClass({
  render() {
    return(
      <ul>
        {this.props.posts.map(function (post) {
          return <li key={post._id}>{post.body}</li>;
        })}
      </ul>
    )  
  }
});
