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
      Meteor.call('createOperator', operatorObj);
   }
});
Template.addOperator.helpers({

});
