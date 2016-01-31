Types._ensureIndex({type: 1}, {unique: 1});

Meteor.methods({
  createType: function(object){
    if(Meteor.myFunctions.isAdmin()){
      try {
        Types.insert(object);
      } catch(e) {
        if(e.toString().indexOf("type") > - 1){
          throw new Meteor.Error("duplicate-type", "Type is already defined.");
        }
      }
    }
  },
  updateType: function(currentId, object){
    if(Meteor.myFunctions.isAdmin()){
      try{
        Units.update({"_id": currentId}, {$set: {
          "type": object.type,
          "rental": object.rental
        }});
      } catch(e){
        if(e.toString().indexOf("type") > - 1){
          throw new Meteor.Error("duplicate-type", "Type is already defined.");
        }
      }
    }
  },
  deleteType: function(currentId){
    if(Meteor.myFunctions.isAdmin()){
      Types.remove({"_id":currentId});
    }
  }
});
