
app.controller('childDetailCtrl', ["$scope", "$firebaseArray", "$firebaseObject", "$stateParams",
  function($scope, $firebaseArray, $firebaseObject, $stateParams) {

  $scope.childId = $stateParams.id;

    console.log("$scope.childId", $scope.childId);

  var incidentRef = new Firebase("https://allowance-tracker.firebaseio.com/incidents")
    .orderByChild("childId")
    .equalTo($scope.childId);
  $scope.incidents = $firebaseArray(incidentRef);
  console.log("$scope.incidents", $scope.incidents);

  var transactionRef = new Firebase ("https://allowance-tracker.firebaseio.com/transactions")
    .orderByChild("name")
    .equalTo($scope.childId);
  $scope.transactions = $firebaseArray(transactionRef);
  console.log("$scope.transactions", $scope.transactions);

  var childRef = new Firebase("http://allowance-tracker.firebaseio.com/children/" + $scope.childId);
  $scope.child = $firebaseObject(childRef);
  $scope.child.$loaded(function(x) {
    console.log(x.balance);
  })
  // console.log("$scope.workingBalance", $scope.child);

  // $scope.runningTotal = 0
  // console.log($scope.child);

  // var ref = new Firebase ("https://allowance-tracker.firebaseio.com");

  // $scope.calculations = function() {
  //   // console.log("click")
  //   $scope.incidents.$loaded(function() {
  //   $scope.infractionTotal = 0
  //   angular.forEach($scope.incidents, function(incident) {
  //     if (incident.name === $scope.childName) {
  //       $scope.infractionTotal += parseFloat(incident.infractionValue);
  //   }
  // });
  //   console.log("infractionTotal", $scope.infractionTotal);
  //   return $scope.infractionTotal;
  // });

  //   $scope.transactions.$loaded(function () {
  //     $scope.transactionTotal = 0
  //     angular.forEach($scope.transactions, function(transaction) {
  //       if (transaction.name === $scope.childName) {
  //         $scope.transactionTotal += parseFloat(transaction.transactionValue);
  //       }
  //     });
  //     console.log("transactionTotal", $scope.transactionTotal)
  //     return $scope.transactionTotal;
  // })


  //     $scope.child = $scope.children.name;
  //     $scope.startDate = $scope.child.date_created;
  //     $scope.calcTime = today.getTime() - $scope.startDate.getTime();
  //     $scope.days = Math.floor($scope.calcTime / (1000 * 60 * 60 * 24));
  //     $scope.multiplier = parseFloat(child.allowance)

  //   angular.forEach(children, function(child) {
  //     if (child.name === $scope.childName) {
  //       $scope.balance = $scope.multiplier * $scope.days;
  //   }
  // });
  // }
}]);


//   $scope.allKidsArray.$on('loaded', $scope.updateSubTotals);
//   $scope.allKidsArray.$on('change', $scope.updateSubTotals);

// var ref = new Firebase("https://allowance-tracker.firebaseio.com/children");
//   $scope.allKidsArray= $firebaseArray(ref);

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