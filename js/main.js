
//Model for when we POST data to API
var TweetPosts = Backbone.Model.extend({
  url: "https://twitterapii.herokuapp.com/tweets"
});

//Collection for when we GET data from API
var TweetedPosts = Backbone.Collection.extend({
  model: TweetPosts,
  url: "https://twitterapii.herokuapp.com/tweets"
})

///***************COMMENT OUT FOR LATER**********************//

var HomeView = Backbone.View.extend({
  tagName: 'section',
  className: 'startScreen',
  // template: _.template($('#homeTemplate').html()),

  initialize: function(data) {
    this.template = data.template;
    this.render();
    console.log("YEAH!!")
  },

  render: function(){
    var data = this.model.toJSON();
    console.log(data);

    this.$el.html(this.template(data));

    return this;
  }
});

var homeView = new HomeView({
  model: TweetPosts,
  el: '#homeTemplate',
  template: body.compile($("#homeTemplate").html())
})


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
