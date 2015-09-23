
 app.factory("updateBalance", function() {

     var ref = new Firebase("https://allowance-tracker.firebaseio.com/children");
    $scope.childList = $firebaseArray(ref);

    var kidList = $scope.childList
    var initialDate = kidList.date_created; // Attention: month is zero-based
    var now = Date.now();
    var difference = now - initialDate;
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var daysSince = Math.floor(difference / millisecondsPerDay);
    var multilplier = parseInt(kidList.allowance);
    var parsedDaysSince = parseInt(daysSince);
    function updateBalance {
        function calculateBalance() {
            var newBalance = multilplier * parsedDaysSince;
            return newBalance;
        }
        kidList.balance.push(newBalance);
        };
  });

