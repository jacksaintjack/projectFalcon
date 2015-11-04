
//Our Router for our
var  FalconRouter = Backbone.Router.extend({

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



})
