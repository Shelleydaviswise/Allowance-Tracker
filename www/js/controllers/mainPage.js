
app.controller('mainCtrl', function($scope, $firebaseArray, $stateParams) {
  var kidsRef = new Firebase("https://allowance-tracker.firebaseio.com/children");
  $scope.children = $firebaseArray(kidsRef);
  // $scope.infractionTotal = runningTotal.getTotal($stateParams.name);


  $scope.togglePost = function(post) {
    if ($scope.isPostShown(post)) {
      $scope.shownPost = null;
    } else {
      $scope.shownPost = post;
    }
  };
  $scope.isPostShown = function(post) {
    return $scope.shownPost === post;
  };

});