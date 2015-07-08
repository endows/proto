PostForm = React.createClass({
  addPost(e) {
    e.preventDefault();
    var content = React.findDOMNode(this.refs.content).value;
    var channel_id = React.findDOMNode(this.refs.channelSelect).value;

    Meteor.call("addPost", {
      body: content,
      channel:channel_id
    });

    React.findDOMNode(this.refs.content).value = "";
  },
  render() {
    return (
      <form onSubmit={this.addPost}>
        <input placeholder="Add a task..." ref="content"/>
        <select ref='channelSelect'>
          {this.props.user.channels.map(function (channel) {
          return <option value={ channel._id }>{ channel.name }</option>
          })}

        </select>
      </form>
    )
  }
});
