app.controller('logTransactionCtrl', ["$scope", "$firebaseArray","$stateParams",
  function($scope, $firebaseArray, $stateParams) {
    $scope.childName=$stateParams.name;
    var transactionList;
    var ref = new Firebase("https://allowance-tracker.firebaseio.com/transactions");
   $scope.transactionList = $firebaseArray(ref);

    $scope.newTransaction = {
      "transactionName": "",
      "transactionValue": ""

    };
    console.log("tlist", $scope.transactionList)

      $scope.postData = function() {
      $scope.newTransaction.timestamp.post = (new Date()).toLocaleString();
      $scope.transactionList.$add($scope.newTransaction);

      }
  }
]);