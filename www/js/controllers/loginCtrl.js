
app.controller('AppCtrl', ["$scope", "$ionicModal", "uidHandler", function($scope, $ionicModal, uidHandler) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {

    var ref = new Firebase("https://allowance-tracker.firebaseio.com/");
    ref.createUser({
      email    : "",
      password : ""
    }, function(error, userData) {
        if (error) {
       console.log("Error creating user:", error);
    } else {
    console.log("Successfully created user account with uid:", userData.uid);
  }
});

        }
    }]);








