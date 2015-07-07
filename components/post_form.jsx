PostForm = React.createClass({
  addPost(e) {
    e.preventDefault();
    var content = React.findDOMNode(this.refs.content).value;

    Meteor.call("addPost", {
      body: content
    });

    React.findDOMNode(this.refs.content).value = "";
  },
  render() {
    return <div><form onSubmit={this.addPost}><input ref="content" placeholder="Add a task..." /></form></div>;
  }
});
