Meteor.methods({
  updateSettings: function(currentId, object){
    if(Meteor.myFunctions.isAdmin()){
      Settings.update({"_id": currentId}, {$set: {
        "penalty": object.penalty,
        "checkIn": object.checkIn,
        "checkOut": object.checkOut,
        "ratio": object.ratio
      }});
    }
  }
});
