app.controller('childDetailCtrl', ["$scope", "$firebaseArray", "$firebaseObject", "$stateParams", "$state",
    function($scope, $firebaseArray, $firebaseObject, $stateParams, $state) {

        $scope.childId = $stateParams.id;

// Getting Firebase reference to perform incident calculations
// Getting Firebase reference to perform transaction calculations
// Getting Firebase reference to get access to the child object
        var childRef = new Firebase("http://allowance-tracker.firebaseio.com/children/" + $scope.childId)
        $scope.child = $firebaseObject(childRef);
         var transTotal = $scope.transactionTotal;
         var infractTotal = $scope.infractionTotal;


         var getInfractions = function(child) {
          var incidentRef = new Firebase("https://allowance-tracker.firebaseio.com/incidents")
            .orderByChild("childId")
            .equalTo($scope.childId);

            $scope.infractionTotal = 0;
            incidentRef.once("value", function(action) {
              $scope.incidents = action.val();
              for (var key in $scope.incidents) {
                $scope.infractionTotal += parseFloat($scope.incidents[key].infractionValue);
              }
              console.log("$scope.infractionTotal", $scope.infractionTotal);
            })

        // $scope.incidents = $firebaseObject(incidentRef);
        //   console.log("I ran")

        //       $scope.infractionTotal = 0;
        //       angular.forEach($scope.incidents, function(incident) {
        //           if (incident.childId === $scope.childId) {
        //               $scope.infractionTotal += parseFloat(incident.infractionValue);
        //           }
        //       });
        //        console.log($scope.infractionTotal);
        //       return $scope.infractionTotal;
          };


          var getTransactions = function(child){
            var transactionRef = new Firebase("https://allowance-tracker.firebaseio.com/transactions")
                  .orderByChild("childId")
                  .equalTo($scope.childId);

            $scope.transactionTotal = 0;
            transactionRef.once("value", function(trans) {
              $scope.transactions = trans.val();
              for (var key in $scope.transactions) {
                $scope.transactionTotal += parseFloat($scope.transactions[key].transactionValue);
              }
              console.log("$scope.transactionTotal", $scope.transactionTotal);
            })

              // $scope.transactions = $firebaseObject(transactionRef);
              // console.log($scope.transactions);

              // $scope.transactionTotal = 0
              // console.log("$scope.transactions", $scope.transactions);
              // angular.forEach($scope.transactions, function(transaction) {
              //   console.log(transaction);
              //     if (transaction.id === $scope.childid) {
              //         $scope.transactionTotal += parseFloat(transaction.transactionValue);
              //     }
              // });
              // console.log($scope.transactionTotal)
              // return $scope.transactionTotal;
          };

            $scope.child.$loaded(function(child) {
                console.log("child", child);
                $scope.startDate = child.date_created;
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

                  getTransactions(child);
                  getInfractions(child);

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
            });
        }
    // }
]);

