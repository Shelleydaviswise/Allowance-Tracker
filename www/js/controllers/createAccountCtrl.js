app.controller('createAccountCtrl', function($scope, $state) {
    var ref = new Firebase("https://allowance-tracker.firebaseio.com/");
    $scope.inputs = {};

    $scope.create = function() {
      ref.createUser({
        email    : $scope.inputs.email,
        password : $scope.inputs.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);

        } else {
          console.log("Successfully created user account with uid:", userData.uid);
          $state.go('app.home');
            }
          });
        }
      });
