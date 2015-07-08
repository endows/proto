Channels = new Meteor.Collection('channels')

Channels._transform = function(doc){
  doc.world = Worlds.findOne(doc.world)
  doc.posts = Posts.find({channel:doc._id})
  doc.user = Users.findOne({_id:doc.user})
  return doc
}
