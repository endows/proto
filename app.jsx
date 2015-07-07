var App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      posts: Posts.find().fetch()
    };
  },
  render() {
    return(
      <div>
        <PostForm /><PostList posts={this.data.posts}/>
      </div>
    )
  }
});

if (Meteor.isClient) {
  Meteor.startup(function () {
    React.render(<App />, document.body);
  });
}
