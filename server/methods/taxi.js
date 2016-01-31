Taxis._ensureIndex({plateNo: 1}, {unique: 1});

Meteor.methods({
  createTaxi: function(object){
    if(Meteor.myFunctions.isAdmin()){
      try {
        Taxis.insert(object);
      } catch(e) {
        if(e.toString().indexOf("plateNo") > - 1){
          throw new Meteor.Error("duplicate-plateNo", "Plate number is already taken.");
        }
      }
    }
  },
  updateTaxi: function(currentId, object){
    if(Meteor.myFunctions.isAdmin()){
      try{
        Taxis.update({"_id": currentId}, {$set: {
          "plateNo": object.plateNo,
          "taxiNo": object.taxiNo,
          "type": object.type,
          "currentOdo": object.currentOdo,
          "brand": object.brand,
          "variant": object.variant,
          "year": object.year
        }});
      } catch(e){
        if(e.toString().indexOf("plateNo") > - 1){
          throw new Meteor.Error("duplicate-plateNo", "Plate number is already taken.");
        }
      }
    }
  },
  deleteTaxi: function(currentId){
    if(Meteor.myFunctions.isAdmin()){
      Taxis.remove({"_id":currentId, "createdBy": Meteor.userId()});
    }
  }
});
