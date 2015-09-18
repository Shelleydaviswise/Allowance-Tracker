app.controller('behaviorTrackCtrl', ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    // var behaviorlist = "";

    var kidsRef = new Firebase("https://allowance-tracker.firebaseio.com/children");
    $scope.children = $firebaseArray(kidsRef);

    console.log("children", $scope.children)

//    $scope.behaviorlist = $firebaseArray(ref);

// var ref = new Firebase("https://allowance-tracker.firebaseio.com/behaviors");
//     $scope.behaviorModel = {
//       yelling: 0,
//       arguing: 0,
//       over2prompts: 0,
//       hitting:0,
//       lying:0,
//       fighting:0,
//       ignoring:0,
//       backtalk:0,
//       noncoop:0
//     };



      $scope.postBehaviors = function() {
        var behaviorValue = function() {
         for (var i = 0; i < $behaviorModel.Items.Count; i++)
         if ($behaviorModel.GetItemCheckState(i) == CheckState.Checked) {
          behaviorValue.push(ng-true-value);
          console.log("behaviorValue", behaviorValue);
        }
          // Do selected stuff
        }
        // else
        //   // Do unselected stuff
        // };
        // $scope.newChild.timestamp.post = (new Date()).toLocaleString();
        $scope.newBehavior.date_created = document.getElementById("addDate").value;
        $scope.childlist.$add($scope.newChild);

      }
  }
]);