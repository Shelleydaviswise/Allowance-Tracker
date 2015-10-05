app.controller('behaviorTrackCtrl', ["$scope", "$firebaseArray","$firebaseObject","$stateParams","$filter",
  function($scope, $firebaseArray, $firebaseObject,$stateParams, $filter) {
   $scope.childId=$stateParams.id;

  console.log("StateParams",$stateParams);
  var childRef = new Firebase("http://allowance-tracker.firebaseio.com/children/" + $scope.childId);
  $scope.child = $firebaseObject(childRef);
  // console.log("the child", $scope.child)
  // console.log("$scope.childId", $scope.childId);

   // empty object to hold the checked values
   $scope.recordedBehaviors={};
    var ref = new Firebase("https://allowance-tracker.firebaseio.com/");
    $scope.behaviorList = $firebaseArray(ref.child("behaviorlist"));


    // empty object to hold filtered checked values
    $scope.newIncident = {};

   // function to filter checked behaviors
    $scope.newIncident = function () {
      $scope.recordedBehaviors = $filter('filter')
      ($scope.behaviorList, {checked : true});
    }
// Array to hold filtered checked behaviors
    $scope.newArray = [];
    $scope.behaviorClicked = function(b) {
      // console.log(b.behaviorName);
      var action = b.behaviorName;
      var value = b.behaviorValue

      $scope.newArray.push({"infractionName":action, "infractionValue":value});
       console.log($scope.newArray)
    }

 // Posting values collected to add incident with date and child name
  $scope.postIncident = function() {
   $scope.newIncident = {};
    var date = moment().format("MM/DD/YY");


   var ref = new Firebase("https://allowance-tracker.firebaseio.com/incidents");
   $scope.incidentList = $firebaseArray(ref);
    // console.log("incidents fired", $scope.incidentList);

      for (var i =0; i< $scope.newArray.length; i++){
        $scope.incidentList.$add({
          infractionDate: date,
          childId:$scope.childId,
          childName: $scope.child.name,
          infractionName: $scope.newArray[i].infractionName,
          infractionValue: $scope.newArray[i].infractionValue
        });
      }
}

}]);

