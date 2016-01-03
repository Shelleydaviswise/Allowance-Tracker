app.controller('childDetailCtrl', ["$scope", "$firebaseArray", "$firebaseObject", "$stateParams", "$state",
    function($scope, $firebaseArray, $firebaseObject, $stateParams, $state) {

      $scope.childId = $stateParams.id;

      var childRef = new Firebase("https://allowancetrackapp.firebaseio.com/children/" + $scope.childId)
      $scope.child = $firebaseObject(childRef);
       var transTotal = $scope.transactionTotal;
       var infractTotal = $scope.infractionTotal;


       var getInfractions = function(child) {
        var incidentRef = new Firebase("https://allowancetrackapp.firebaseio.com/incidents")
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
        };

        var getTransactions = function(child){
          var transactionRef = new Firebase("https://allowancetrackapp.firebaseio.com/transactions")
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

]);

