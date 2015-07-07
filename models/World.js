Worlds = new Meteor.Collection('worlds')

Worlds._transform = function(doc){
  doc.channels = Channels.find({world:doc._id})
  return doc
}
