app.controller('addChildCtrl', ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var childlist;
    var ref = new Firebase("https://allowance-tracker.firebaseio.com/children");
   $scope.childlist = $firebaseArray(ref);

    $scope.newChild = {
      "name": "",
      "balance": "",
      "allowance": "",
      "frequency":""

    };
    console.log("childist", $scope.childlist)

      $scope.postData = function() {
        // $scope.newChild.timestamp.post = (new Date()).toLocaleString();
        $scope.newChild.date_created = document.getElementById("addDate").value;
        $scope.childlist.$add($scope.newChild);

      }
  }
]);