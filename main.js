if(Meteor.isClient){
  Meteor.loginWithPassword("admin", "admin");
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
  });
}

Meteor.myFunctions = {
  isAdmin: function(){
    var currentUser = Meteor.userId();
    if(!userId){
      return false;
    }

    if(Roles.userIsInRole(userId, roles.admin.key)){
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
