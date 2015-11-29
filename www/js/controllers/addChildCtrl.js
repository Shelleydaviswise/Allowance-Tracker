aapp.controller('addChildCtrl', ["$scope", "$firebaseArray", "$firebaseObject", "currentAuth",
    function($scope, $firebaseArray, $firebaseObject, currentAuth) {
        var uid = currentAuth.uid;
        var ref = new Firebase("https://allowance-tracker.firebaseio.com");
        $scope.user = $firebaseObject(ref.child('users').child(uid));

        var childList;
        var ref = new Firebase("https://allowance-tracker.firebaseio.com/children");
        $scope.childList = $firebaseArray(ref);
        var date = Date.now();

        $scope.newChild = {
            "name": "",
            "balance": "",
            "allowance": "",
            "frequency": "",
            "runningTotal": "",
            "date_created": date,
        };

        console.log("childList", $scope.childList)
        $scope.postData = function() {

            // $scope.newChild.date_created = document.getElementById("addDate").value;
            $scope.childList.$add($scope.newChild);
        }

    }
]);
