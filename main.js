if(Meteor.isClient){
  // Meteor.loginWithPassword("admin", "admin");
  Template.main.helpers({
    currentUser: function() {
      return Meteor.userId();
    }
  });
  Template.sidebar.events({
    'click #logout': function() {
      Meteor.logout();
      Router.go("/");
    }
  })

}

if(Meteor.isServer){
  Accounts.onCreateUser(function(options, user) {
    user.softDelete = false;
    if (options.profile)
      user.profile = options.profile;
    return user;
  });

  Meteor.startup(function(){
    if(Meteor.users.find().count() === 0){
      var userObject = {
        username: "admin",
        password: "admin"
      };
      var id = Accounts.createUser(userObject);
      if(id){
        Roles.addUsersToRoles(id, roles.admin.key);
      }
    }
    if(Settings.find().count() === 0){
      Settings.insert({
        penalty: "defaultValue",
        checkIn: "06:00",
        checkOut:"22:00",
        ratio: 1});
    }
    if(Types.find().count() === 0){
      Types.insert({
        type:'new',
        rental:500
      });
    }
  });
}

Meteor.myFunctions = {
  isAdmin: function(){
    var currentUser = Meteor.userId();
    if(!currentUser){
      return false;
    }

    if(Roles.userIsInRole(currentUser, roles.admin.key)){
      return true;
    } else {
      return false;
    }
  }
};

roles = {
  admin: {
    key: "admin",
    name: "Admin"
  },
  driver:{
    key: "driver",
    name: "Driver"
  }
};
