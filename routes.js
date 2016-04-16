Router.configure({
  layoutTemplate:"main"
  // loadingTemplate: "loading"
});

Router.route("/", {
  name: "login",
  template: "login"
  // onBeforeAction: function(){
  //   var currentUser = Meteor.userId();
  //   if(currentUser){
  //     Router.go("");
  //   } else{
  //     this.next();
  //   }
  // }
});

Router.route("/operators");
Router.route("/add-operator");
Router.route("/taxis");
Router.route("/add-taxi");