Template.addOperator.events({
  'submit form': function(event){
      event.preventDefault();
      let userProfileObj = {};
      userProfileObj['name'] = $('#nameInput').val();
      userProfileObj['address'] = $('#addressInput').val();

      let operatorObj = {};
      operatorObj['username'] = $('#usernameInput').val();
      operatorObj['password'] = $('#passwordInput').val();
      var roles = [$('#positionInput').val()];
      operatorObj['profile'] = userProfileObj;
<<<<<<< Updated upstream
      Meteor.call('createOperator', operatorObj);
=======
      console.log(operatorObj);
      var pro = Meteor.call('createOperator', operatorObj);
>>>>>>> Stashed changes
   }
});
Template.addOperator.helpers({
    'driver':function(){
        return Drivers.find({});
    },
    'operator':function(driver){
         return 
    }
});
