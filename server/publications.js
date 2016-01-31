Meteor.publish("settings", function(){
  return Settings.find({});
});

Meteor.publish("types", function(){
  return Types.find({});
});

Meteor.publish("taxis", function(){
  return Taxis.find({createdBy: Meteor.userId()});
});
