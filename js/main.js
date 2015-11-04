
///***************COMMENT OUT FOR LATER**********************//

//Our views for our pages
// var LoginView = Backgone.View.extend({
//   template: _template(////$('#addtemplate here').html());
//
//   render: function(){
//     this.$el.html(this.template());
//   }
// });

// var RegistrationView = Backbone.View.extend({
//   template: _template(////$('#template here').html())
//
//   render: function(){
//     this.$el.html(this.template());
//   }
// });

// var DashboardView = Backbone.View.extend({
//   template: _template($("#addTemplateHere").html());
//
//   renter: function(){
//     this.$el.html(this.template());
//   };
// });

// var UsersView = Backbone.View.extend({
//   template: _template($('#changeThis').html());
//
//   render: function(){
//     this.$el.html(this.template());
//   }
// });

// var UserIdView = Backbone.View.extend({
//   template: _template($("#add Template").html());
//
//   render: function(){
//     this.$el.html(this.template);
//   }
// });

//Our Router for our
var FalconRouter = Backbone.Router.extend({

  routes: {
    "": "home",
    "login": "loginRoute",
    "registration": "registrationRoute",
    "dashboard": "dashboardRoute",
    "users": "usersRoute",
    "user/:userid": "useridRoute" //the :userid will change depend JSON
  },

  home: function(){

  },

  loginRoute: function(){
  
  },

  registrationRoute: function(){

  },

  dashboard: function(){

  },

  users: function(){

  },

  useridRoute: function(){

  }



});
