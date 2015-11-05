
///***************COMMENT OUT FOR LATER**********************//

// var HomeView = Backbone.View.extend({
//   template: _template($('#addTemplateHere').html());
//
//   router: function(){
//     this.$el(this.template.html());
//   }
// })

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
var  FalconRouter = Backbone.Router.extend({

  routes: {
    "home": "home",
    "login": "loginRoute",
    "registration": "registrationRoute",
    "dashboard": "dashboardRoute",
    "users": "usersRoute",
    "user/:userid": "useridRoute" //the :userid will change depend JSON
  },

  home: function(){
    // //To be used later to show the template views of the page
    // var view = new HomeView()
    // view.render(); // running the render function in HomeView
    // $('#classOrIdgoeshere').html(view.$el); // Tells it where the template should be loaded under
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
    // $('#classOrIdgoeshere').html(view.$el);
  }




});
