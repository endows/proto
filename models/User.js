Users = new Meteor.Collection('users')

Users._transform = function(doc){
  doc.channels = Channels.find({user:doc._id})
  return doc
}
