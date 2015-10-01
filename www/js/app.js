
var app = angular.module('AllowanceApp', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    // if (window.cordova && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    //   cordova.plugins.Keyboard.disableScroll(true);

    // }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise('/app/home');

 $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
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

