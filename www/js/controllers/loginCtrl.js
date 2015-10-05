app.controller("loginCtrl", function($scope, $firebaseArray, $state) {

  var ref = new Firebase("https://allowance-tracker.firebaseio.com");
  $scope.inputs = {};
  $scope.element = {};

  $scope.login = function() {
    ref.authWithPassword({
      email: $scope.inputs.email,
      password: $scope.inputs.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $scope.authData = authData;
        $state.go('app.home');
      }
    });
  };

  $scope.newUser = function() {
    $state.go("app.createaccount");
  };

});