app.controller('logTransactionCtrl', ["$scope", "$firebaseArray","$stateParams",
  function($scope, $firebaseArray, $stateParams) {
    $scope.childName=$stateParams.name;
    var transactionList;
    var ref = new Firebase("https://allowance-tracker.firebaseio.com/transactions");
   $scope.transactionList = $firebaseArray(ref);
   var date = (new Date()).toLocaleString();
    $scope.newTransaction = {
      "name": $scope.childName,
      "transactionDate": date,
      "transactionName": "",
      "transactionValue": "",
      "transactionNotes": ""

    };
    console.log("tlist", $scope.transactionList)

      $scope.postTransaction = function() {
      $scope.transactionList.$add($scope.newTransaction);

      }
  }
]);