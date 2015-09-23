app.controller('addBehaviorCtrl', ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var behaviorlist;
    var ref = new Firebase("https://allowance-tracker.firebaseio.com/behaviorlist");
   $scope.behaviorList = $firebaseArray(ref);

    $scope.newBehavior = {
      "behaviorName": "",
      "behaviorValue": ""

    };
    console.log("behaviorlist", $scope.behaviorList)

      $scope.postData = function() {
        // $scope.newChild.timestamp.post = (new Date()).toLocaleString();
      $scope.behaviorList.$add($scope.newBehavior);

      }
  }
]);