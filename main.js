if(Meteor.isClient){

}

if(Meteor.isServer){
  Meteor.startup(function(){

  });
}

Meteor.myFunctions = {
  myFunction: function(){

  }
};

roles = {
  admin: {
    key: "admin",
    name: "Administrator"
  },
  driver:{
    key: "driver",
    name: "Driver"
  }
};
