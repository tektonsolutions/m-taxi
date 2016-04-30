Router.configure({
  layoutTemplate:"main"
  // loadingTemplate: "loading"
});


Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('login');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
});

Router.route("/", {
  name: "login",
  template: "login",
  onBeforeAction: function(){
    var currentUser = Meteor.userId();
    if(currentUser){
      Router.go("/dashboard");
    } else{
      this.next();
    }
  }
});

Router.route("/operators");
Router.route("/add-operator");
Router.route("/taxis");
Router.route("/add-taxi");
Router.route("/dashboard");
Router.route("/reports");