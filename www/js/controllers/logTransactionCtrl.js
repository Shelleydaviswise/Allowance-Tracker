app.controller('logTransactionCtrl', ["$scope", "$firebaseArray", "$firebaseObject","$stateParams", function($scope, $firebaseArray, $firebaseObject, $stateParams) {
        $scope.childId = $stateParams.id;

        // Getting firebaseObject to access childId
        var childRef = new Firebase("http://allowance-tracker.firebaseio.com/children/" + $scope.childId);
        $scope.child = $firebaseObject(childRef);
        console.log("the child", $scope.child)
        console.log("$scope.childId", $scope.childId);

        var ref = new Firebase("https://allowance-tracker.firebaseio.com/transactions" + $scope.childId);
        $scope.transactionList = $firebaseArray(ref);
        // $scope.newTransaction = {};
        var date = (new Date()).toLocaleString();
           // $scope.postTransaction = function() {
           //      $scope.transactionList.add({
           //      "transactionDate" date,
           //      "transactionName": "",
           //      "transactionValue": "",
           //      "transactionNotes": "",
           //      "childId": $scope.childId,
           //      "name"= $scope.child.name
           //  });
           //  // $scope.postTransaction = function() {
           //  //   $scope.transactionList.$add($scope.newTransaction)
        // };
        console.log("tlist", $scope.transactionList)
    }
]);
