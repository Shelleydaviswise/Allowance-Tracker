app.controller('addBehaviorCtrl', ["$scope", "$firebaseArray", "$firebaseObject",
    function($scope, $firebaseArray, $fireaseObject) {

        var behaviorlist;
        var ref = new Firebase("https://allowancetrackapp.firebaseio.com/behaviorlist");
        $scope.behaviorList = $firebaseArray(ref);

        $scope.newBehavior = {
            "behaviorName": "",
            "behaviorValue": ""
        };

        // console.log("behaviorlist", $scope.behaviorList)

        $scope.postData = function() {
            // $scope.newChild.timestamp.post = (new Date()).toLocaleString();
            $scope.behaviorList.$add($scope.newBehavior);
        }
    }
]);
