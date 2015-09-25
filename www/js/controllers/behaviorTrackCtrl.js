app.controller('behaviorTrackCtrl', ["$scope", "$firebaseArray","$stateParams","$filter",
  function($scope, $firebaseArray, $stateParams, $filter) {
   $scope.childName=$stateParams.name;

   // empty object to hold the checked values
   $scope.recordedBehaviors={};
    var behaviorListRef = new Firebase("https://allowance-tracker.firebaseio.com/");
    $scope.behaviorList = $firebaseArray(behaviorListRef.child("behaviorlist"));
    console.log("$scope.behaviorList",$scope.behaviorList )
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

      $scope.newArray.push({ "infractionName":action, "infractionValue":value});
       // console.log($scope.newArray)
    }

 // Posting values collected to add incident with date and child name
  $scope.postIncident = function() {
   $scope.newIncident = {};
   var date = (new Date()).toLocaleString();

   var ref = new Firebase("https://allowance-tracker.firebaseio.com/incidents");
   $scope.incidentList = $firebaseArray(ref);
    // console.log("incidents fired", $scope.incidentList);

      for (var i =0; i< $scope.newArray.length; i++){
        $scope.incidentList.$add({
          infractionDate: date,
          name: $scope.childName,
          infractionName: $scope.newArray[i].infractionName,
          infractionValue: $scope.newArray[i].infractionValue
        });
      }



}


}]);

