
app.controller('mainCtrl', function($scope, $firebaseArray, $firebaseObject, $stateParams) {


  var childRef = new Firebase("http://allowancetrackapp.firebaseio.com/children" );
  $scope.children = $firebaseArray(childRef);
  console.log("$scope.children", $scope.children)

});