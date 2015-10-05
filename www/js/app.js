var app = angular.module('AllowanceApp', ['ionic', 'firebase'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app');

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'mainCtrl',
    resolve: {
      // controller will not be loaded until $waitForAuth resolves
      // Auth refers to our $firebaseAuth wrapper in the example above
      "currentAuth": ["Auth", function(Auth) {
        // $waitForAuth returns a promise so the resolve waits for it to complete
        return Auth.$requireAuth();
      }]
    }
  })

  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'mainCtrl'
        }
      }
    })
    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        }
      }
    })
    .state('app.create', {
      url: '/createaccount',
      views: {
        'menuContent': {
          templateUrl: 'templates/createaccount.html',
          controller: 'createAccountCtrl'
        }
      }
    })
    .state('app.details', {
      url: '/home/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/childdetail.html',
          controller: 'childDetailCtrl'
        }
      }
    })
    .state('app.add', {
      url: '/add',
      views: {
        'menuContent': {
          templateUrl: 'templates/addchild.html',
          controller: 'addChildCtrl'

        }
      }
    }).state('app.addbehavior', {
      url: '/addbehavior',
      views: {
        'menuContent': {
          templateUrl: 'templates/addbehavior.html',
          controller: 'addBehaviorCtrl'
        }
      }
    })
    .state('app.select', {
      url: '/select',
      views: {
        'menuContent': {
          templateUrl: 'templates/selectchild.html',
          controller: 'mainCtrl'

        }
      }
    })
    .state('app.track', {
      url: '/select/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/trackbehaviors.html',
          controller: 'behaviorTrackCtrl'

        }
      }
    })
    .state('app.selecttransact', {
      url: '/transact',
      views: {
        'menuContent': {
          templateUrl: 'templates/transactchild.html',
          controller: 'mainCtrl'
        }
      }
    })
    .state('app.logtransact', {
      url: '/transact/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/logtransaction.html',
          controller: 'logTransactionCtrl'

        }
      }
    })

});
