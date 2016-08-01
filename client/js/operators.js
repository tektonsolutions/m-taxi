Template.addOperator.events({
  'submit form': function(event){
      event.preventDefault();
      let userProfileObj = {};
      userProfileObj['name'] = $('#nameInput').val();
      userProfileObj['address'] = $('#addressInput').val();
      userProfileObj['role'] = [$('#positionInput').val()];

      let operatorObj = {};
      operatorObj['username'] = $('#usernameInput').val();
      operatorObj['password'] = $('#passwordInput').val();
      var roles = [$('#positionInput').val()];
      operatorObj['profile'] = userProfileObj;
      Meteor.call('createOperator', operatorObj);
      console.log(operatorObj);
   }
});
Template.operators.helpers({
    'driver':function(){
        var drivers = Drivers.find({}).fetch();
        return _.map(drivers,function(driver) {
           driver.taxi = Taxis.findOne({currentDriver:driver._id})
           return driver;
        });
    },
    'operator':function(driver){
         return Taxis.find({_id:driver})
    }
});
