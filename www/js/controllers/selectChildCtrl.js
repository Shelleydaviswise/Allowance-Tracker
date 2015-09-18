app.controller('selectChildCtrl', ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    // var behaviorlist = "";

    var kidsRef = new Firebase("https://allowance-tracker.firebaseio.com/children");
    $scope.children = $firebaseArray(kidsRef);

    console.log("children", $scope.children)




      }
]);