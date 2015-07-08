ChannelList = React.createClass({
  render() {
    return (
      <ul>
        {this.props.channels.map(function (channel) {
          return (
            
              <div>
                <h3>{channel.name}</h3>
                <PostList posts={channel.posts}/>
              </div>

          );
        })}
      </ul>
    )
  }
});
