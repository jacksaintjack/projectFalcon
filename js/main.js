
//Global Variable / JSON URL
var urlUser = "https://twitterapii.herokuapp.com/users";

///***************COMMENT OUT FOR LATER**********************//

var HomeView = Backbone.View.extend({
  tagName: 'section',
  template: _.template($('#homeTemplate').html()),

  render: function(){
    this.$el.html(this.template)
  }
});

//Our views for our pages
// var LoginView = Backgone.View.extend({
//   template: _.template($('#addtemplatehere').html()),
//
//   render: function(){
//     this.$el.html(this.template());
//   }
// });

// var RegistrationView = Backbone.View.extend({
//   template: _.template(////$('#template here').html()),
//
//   render: function(){
//     this.$el.html(this.template());
//   }
// });

// var DashboardView = Backbone.View.extend({
//   template: _.template($("#addTemplateHere").html()),
//
//   render: function(){
//     this.$el.html(this.template());
//   };
// });

// var UsersView = Backbone.View.extend({
//   template: _template($('#changeThis').html()),
//
//   render: function(){
//     this.$el.html(this.template());
//   }
// });

// var UserIdView = Backbone.View.extend({
//   template: _.template($("#add Template").html()),
//
//   render: function(){
//     this.$el.html(this.template);
//   }
// });

//Our Router for our
var  FalconRouter = Backbone.Router.extend({

  routes: {
    "": "home",
    "login": "loginRoute",
    "registration": "registrationRoute",
    "dashboard": "dashboardRoute",
    "users": "usersRoute",
    "user/:userid": "useridRoute" //the :userid will change depend JSON user ID Makes sure to fix this later
  },

  home: function(){
    var view = new HomeView();
    view.render();
    $('#mainArea').html(view.$el);
  },

  loginRoute: function(){
    // var view = new LoginView();
    // view.render();
    // $('#classOrIdgoeshere').html(view.$el);
  },

  registrationRoute: function(){
    // var view = new RegistrationView();
    // view.render();
    // $('#classOrIdgoeshere').html(view.$el);
  },

  dashboard: function(){
    // var view = new DashboardView();
    // view.render();
    // $('#classOrIdgoeshere').html(view.$el);
  },

  users: function(){
    // var view = new UsersView();
    // view.render();
    // $('#classOrIdgoeshere').html(view.$el);
  },

  useridRoute: function(){
    // var view = UserIdView();
    // view.render();
    //  $('#classOrIdgoeshere').html(view.$el);
  }

});

var router = new FalconRouter();
Backbone.history.start();
