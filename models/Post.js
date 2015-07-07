Posts = new Meteor.Collection('posts')
Posts._transform = function(doc){
  doc.channel = Channels.findOne(doc.channel)
  return doc
}

Meteor.methods({
  'addPost':function(post){
    Posts.insert(post)
  }
})
