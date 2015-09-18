
app.controller('mainCtrl', function($scope, $firebaseArray) {
  var kidsRef = new Firebase("https://allowance-tracker.firebaseio.com/children");
  $scope.children = $firebaseArray(kidsRef);

  console.log($scope.children);
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
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