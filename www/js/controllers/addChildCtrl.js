app.controller('addChildCtrl', ["$scope", "$firebaseArray", "$firebaseObject",
    function($scope, $firebaseArray, $firebaseObject) {
        // var uid = currentAuth.uid;
        // will need to add current auth back to the dependencies list and function arguments
        // var ref = new Firebase("https://allowancetrackapp.firebaseio.com/");
        // $scope.user = $firebaseObject(ref.child('users').child(uid));

        var childList;
        var ref = new Firebase("https://allowancetrackapp.firebaseio.com/children");
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
