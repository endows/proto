var App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      posts: Posts.find().fetch(),
      channels: Channels.find().fetch(),
      user: Users.findOne('jMNMCaENtAvsjvBhZ')
    };
  },
  render() {
    return(
      <div>
        <ChannelList channels={this.data.channels}/>
        <PostForm user={ this.data.user }/><PostList posts={this.data.posts}/>
      </div>
    )
  }
});

if (Meteor.isClient) {
  Meteor.startup(function () {
    React.render(<App />, document.body);
  });
}
