app.controller('selectChildCtrl',
  function($scope, $firebaseArray, $firebaseObject, $stateParams) {

var childRef = new Firebase("http://allowance-tracker.firebaseio.com/children" );
  $scope.children = $firebaseArray(childRef);
   console.log("$scope.children", $scope.children)
  // var childRef = new Firebase("http://allowance-tracker.firebaseio.com/children/" );
  // $scope.children = $firebaseArray(childRef);

    // var kidsRef = new Firebase("https://allowance-tracker.firebaseio.com/children");
    // $scope.children = $firebaseObject(kidsRef);
      }
);