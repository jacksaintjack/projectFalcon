
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

var User = Backbone.Model.extend({
  url: "https://twitterapii.herokuapp.com/users"
});

//Collection for when we GET data from API
var Users = Backbone.Collection.extend({
  model: User,
  url: "https://twitterapii.herokuapp.com/users",

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
var LoginView = Backbone.View.extend({
  tagName: 'section',
  template: _.template($('#signInTemplate').html()),

  render: function(){
    this.$el.html(this.template());
  }
});

var RegistrationView = Backbone.View.extend({
  tagName: 'section',
  template: _.template($('#registerTemplate').html()),

  events: {
    'click .registerButton': 'handleSubmitClick'
  },

  send: function(){
    var register = this.$('.registerButton').val();
      console.log("click!!");

    var email = this.$(".email").val();
    var password = this.$(".password");
    var confirmedPassword = this.$(".confirmPassword");

    var newUser = new User({
      email: email,
      password: password,
      
    })
  },

  render: function(){
    this.$el.html(this.template());
  },

  handleSubmitClick: function(event){
    event.preventDefault();
    this.send();
    console.log("clicksss!!");
  }

});

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
    "login": "login",
    "registration": "registration",
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

  login: function(){
    var view = new LoginView();
    view.render();
    $('#mainArea').html(view.$el);
  },

  registration: function(){
    var view = new RegistrationView();
    view.render();
    $('#mainArea').html(view.$el);
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
