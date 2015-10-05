app.controller('childDetailCtrl', ["$scope", "$firebaseArray", "$firebaseObject", "$stateParams", "$state",
    function($scope, $firebaseArray, $firebaseObject, $stateParams, $state) {

        $scope.childId = $stateParams.id;


// Getting Firebase reference to perform incident calculations
        var incidentRef = new Firebase("https://allowance-tracker.firebaseio.com/incidents")
            .orderByChild("childId")
            .equalTo($scope.childId);
        $scope.incidents = $firebaseObject(incidentRef);

// Getting Firebase reference to perform transaction calculations
        var transactionRef = new Firebase("https://allowance-tracker.firebaseio.com/transactions")
            .orderByChild("childId")
            .equalTo($scope.childId);
        $scope.transactions = $firebaseObject(transactionRef);
        console.log($scope.transactions);

// Getting Firebase reference to get access to the child object
        var childRef = new Firebase("http://allowance-tracker.firebaseio.com/children/" + $scope.childId)
        $scope.child = $firebaseObject(childRef);
         var transTotal = $scope.transactionTotal;
         var infractTotal = $scope.infractionTotal;
        // $scope.calculations = function() {
            $scope.incidents.$loaded(function() {
                $scope.infractionTotal = 0
                angular.forEach($scope.incidents, function(incident) {
                    if (incident.childId === $scope.childId) {
                        $scope.infractionTotal += parseFloat(incident.infractionValue);
                    }
                });
                 console.log($scope.infractionTotal);
                return $scope.infractionTotal;
            });
            $scope.transactions.$loaded(function() {
                $scope.transactionTotal = 0
                angular.forEach($scope.transactions, function(transaction) {
                    if (transaction.id === $scope.childid) {
                        $scope.transactionTotal += parseFloat(transaction.transactionValue);
                    }
                });
                console.log($scope.transactionTotal)
                return $scope.transactionTotal;
            }) //me

            $scope.child.$loaded(function() {
                $scope.startDate = $scope.child.date_created;
                $scope.today = Date.now();
                $scope.calcTime = $scope.today - $scope.startDate;

                $scope.days = Math.floor($scope.calcTime / (1000 * 60 * 60 * 24));
                $scope.allowance = parseFloat($scope.child.allowance)
                  if ($scope.child.id === $scope.childId) {
                    $scope.addAllowance = $scope.allowance * $scope.days;
                  }  else {
                    $scope.addAllowance = $scope.allowance * $scope.days;
                    console.log("addAllowance",$scope.addAllowance)
                  };
                  console.log($scope.transactionTotal);
                  console.log($scope.infractionTotal);

                $scope.runningTotal = $scope.transactionTotal + $scope.infractionTotal;
                console.log($scope.runningTotal);
                $scope.workingBalance = parseFloat($scope.child.balance)
                $scope.availableBalance = 0;
                  if ($scope.child.id === $scope.childId) {
                      $scope.availableBalance = ($scope.workingBalance - $scope.runningTotal) + $scope.addAllowance;

                  } else {
                      $scope.availableBalance = ($scope.workingBalance - $scope.runningTotal) + $scope.addAllowance
                  };
                console.log("Available Balance", $scope.availableBalance);
                    return $scope.availableBalance;
            }); // the end
        }
    // }
]);

