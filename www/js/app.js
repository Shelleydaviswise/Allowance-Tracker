
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
          controller: 'selectChildCtrl'

        }
      }
    })
    .state('app.track', {
      url: '/select/:name',
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
          controller: 'transactChildCtrl'

        }
      }
    })
        .state('app.logtransact', {
      url: '/transact/:name',
      views: {
        'menuContent': {
          templateUrl: 'templates/logtransaction.html',
          controller: 'logTransactionCtrl'

        }
      }
    })

});

