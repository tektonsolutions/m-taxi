
Meteor.methods({
  'createOperator': function(object){
    if(Meteor.myFunctions.isAdmin()){
      try {
        var id = Accounts.createUser(object);
        var duser = Meteor.users.findOne(id);
        console.log(object);
        Roles.addUsersToRoles(id, roles.driver.key);
        let driverObj = {};
        driverObj.rentalBalance = 0;
        driverObj.refillBalance = 0;
        driverObj.user = duser;
        Drivers.insert(driverObj);
      } catch(e) {
        console.log('error: '+ e);
      }
    }
  },
  updateOperator: function(currentId, object){
    if(Meteor.myFunctions.isAdmin()){
      try{
        Operators.update({"_id": currentId}, {$set: {
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
  deleteOperator: function(currentId){
    if(Meteor.myFunctions.isAdmin()){
      Operators.remove({"_id":currentId, "createdBy": Meteor.userId()});
    }
  }
});
