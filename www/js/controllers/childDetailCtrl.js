
// app.run(function ($rootScope, $scope, $firebaseArray) {



// });
app.controller('childDetailCtrl', ["$scope", "$firebaseArray","$stateParams",
  function($scope, $firebaseArray,$stateParams) {
    $scope.childName=$stateParams.name;

  var incidentRef = new Firebase("https://allowance-tracker.firebaseio.com/incidents");
  var incidents = $firebaseArray(incidentRef);
  var transactionRef = new Firebase ("https://allowance-tracker.firebaseio.com/transactions");
  var transactions = $firebaseArray(transactionRef);

  incidents.$loaded(function() {
  $scope.infractionTotal = 0
  angular.forEach(incidents, function(incident) {
    if (incident.name === $scope.childName) {
      $scope.infractionTotal += parseFloat(incident.infractionValue);
  }});
  console.log($scope.infractionTotal)
});

 transactions.$loaded(function () {
  $scope.transactionTotal = 0
  angular.forEach(transactions, function(transaction) {
    if (transaction.name === $scope.childName) {
      $scope.transactionTotal += parseFloat(transaction.transactionValue);

  }});

  });
}]);





// ref = firebase("url/transaction").orderByChild("name").equalTo(childStateParam);

// childTransactions = $firebaseArray(ref);

// $scope.transactionTotal = 0

// for() {
//   $scope.transactionTotal += transactionValue
// }

// $scope.balance = $scope.infractionTotal + $scope.transactionTotal;



// <span ng-model="balance">
//     var ref = new Firebase("https://allowance-tracker.firebaseio.com/transactions");
//    $scope.transactionList = $firebaseArray(ref);
//    var date = (new Date()).toLocaleString();

//     console.log("tlist", $scope.transactionList)

//       $scope.postTransaction = function() {
//       $scope.transactionList.$add($scope.newTransaction);

//       }
//   }
// ]);