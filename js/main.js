
//Model for when we POST data to API
var Tweet = Backbone.Model.extend({
  url: "https://twitterapii.herokuapp.com/tweets"
});

//Collection for when we GET data from API
var Tweets = Backbone.Collection.extend({
  model: Tweet,
  url: "https://twitterapii.herokuapp.com/tweets",

   parse: function(response) {
     return response.data;
   }
})

///***************COMMENT OUT FOR LATER**********************//

var HomeView = Backbone.View.extend({
  tagName: 'section',
  template: _.template($('#homeTemplate').html()),


  render: function(){

    var tweets = this.collection.toJSON();
    this.$el.html(this.template({
      tweets: tweets
    }));

    return this;
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
    var collection = new Tweets();
    var view = new HomeView({
      collection: collection
    });

    collection.fetch({
      success: function(){
        view.render();
        $('#mainArea').html(view.$el);
      }
    });

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

var router = new FalconRouter();
Backbone.history.start();
