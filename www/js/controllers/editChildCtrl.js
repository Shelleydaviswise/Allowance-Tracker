app.controller('editChildCtrl', ["$scope", "$firebaseArray", "$firebaseObject", "currentAuth",
    function($scope, $firebaseArray, $firebaseObject, currentAuth) {
        var uid = currentAuth.uid;
        var ref = new Firebase("https://allowancetrackapp.firebaseio.com/");
        $scope.user = $firebaseObject(ref.child('users').child(uid));

        var childList;
        var ref = new Firebase("https://allowancetrackapp.firebaseio.com/children");
        $scope.childList = $firebaseArray(ref);

        console.log("childList", $scope.childList)

        $scope.deleteChild = function(oneChild) {
          $scope.childList.$remove(oneChild);
        };
    }
]);
