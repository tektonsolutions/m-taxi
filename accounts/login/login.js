if(Meteor.isClient){
  Template.login.events({
    "submit form": function(event){
      event.preventDefault();
      var username = $("[type=username]").val();
      var password = $("[type=password]").val();
      console.log(username);
      Meteor.loginWithPassword(username, password, function(error){
        if(error){
          if(error.reason == "User not found"){
            validator.showErrors({
              username: error.reason
            });
          }
          if(error.reason == "Incorrect password"){
            validator.showErrors({
              password: error.reason
            });
          }
        } else{
          Router.go("dashboard");
        }
      });
    }
  });

  Template.login.onRendered(function(){
    var validator = $(".from-signin").validate({
      submitHandler: function(){
        var username = $("[type=username]").val();
        var password = $("[type=password]").val();
        Meteor.loginWithPassword(username, password, function(error){
          if(error){
            if(error.reason == "User not found"){
              validator.showErrors({
                username: error.reason
              });
            }
            if(error.reason == "Incorrect password"){
              validator.showErrors({
                password: error.reason
              });
            }
          } else{
            Router.go("dashboard");
          }
        });
      }
    });
  });
}
