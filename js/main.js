
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

var UserToken = Backbone.Model.extend({
  url: "https://twitterapii.herokuapp.com/oauth/token"
});

//Collection for when we GET data from API
var UsersTokens = Backbone.Collection.extend({
  model: User,
  url: "https://twitterapii.herokuapp.com/oauth/token",

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
var signinView = Backbone.View.extend({
  tagName: 'section',
  template: _.template($('#signInTemplate').html()),

  events: {
    "click .signinButton": 'handleLoginClick'
  },

  send: function(){
    var signin = this.$('.signinButton').val();
      console.log("clicking!!");

    var email = this.$(".email").val();
    var password = this.$(".password").val();

    // if (email.trim() === '') {
    //   alert('Need your email?');
    //   return;
    // }
    //
    // if (password.trim() === '') {
    //   alert('Need a password...');
    //   return;
    // }

    var login = new UserToken({
      grant_type: password,
      username: email,
      password: password
   });
 },

  render: function(){
    this.$el.html(this.template());
  },

  handleLoginClick: function(){
    event.preventDefault();
    this.send();
    console.log("login clicksss!!");
  }
});

var RegistrationView = Backbone.View.extend({
  tagName: 'section',
  template: _.template($('#registerTemplate').html()),

  events: {
    'click .registerButton': 'handlerRegisterClick'
  },

  send: function(){
    var register = this.$('.registerButton').val();
      console.log("click!!");

    var email = this.$(".email").val();
    var password = this.$(".password").val();
    var confirmedPassword = this.$(".confirmPassword").val();

    if (email.trim() === '') {
      alert('whats your email?');
      return;
    }

    if (password.trim() === '') {
      alert('You need to create a password...');
      return;
    }

    if (confirmedPassword.trim() === '') {
      alert('You need to confirm your password...');
      return;
    }

    var newUser = new User({
      user: {
     email: email,
     password: password,
    }
  })

    newUser.save();

  },

  render: function(){
    this.$el.html(this.template());
  },

  handlerRegisterClick: function(event){
    event.preventDefault();
    this.send();
    console.log("clicksss!!");
  }

});

var DashboardView = Backbone.View.extend({
  tagName: 'section',
  template: _.template($('#dashboardTemplate').html()),


  render: function(){
    this.$el.html(this.template());
    console.log(this);
  }

});

// var UsersView = Backbone.View.extend({
//   template: _.template($('#changeThis').html()),
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
    "dashboard": "dashboard",
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
    var view = new signinView();
    view.render();
    $('#mainArea').html(view.$el);


  },

  registration: function(){
    var view = new RegistrationView();
    view.render();
    $('#mainArea').html(view.$el);
  },

  dashboard: function(){
    var view = new DashboardView();
    view.render();
    $('#mainArea').html(view.$el);

  },

  users: function(){

  },

  useridRoute: function(){

  }

});

var router = new FalconRouter();
Backbone.history.start();

var homeView = new HomeView();
var userCollection = new Users();

var userList = new Users({})
