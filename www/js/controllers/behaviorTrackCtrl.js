app.controller('behaviorTrackCtrl', ["$scope", "$firebaseArray","$stateParams","$filter",
  function($scope, $firebaseArray, $stateParams, $filter) {
   $scope.childName=$stateParams.name;

   // empty object to hold the checked values
   $scope.recordedBehaviors={};
    var behaviorListRef = new Firebase("https://allowance-tracker.firebaseio.com/");
    $scope.behaviorList = $firebaseArray(behaviorListRef.child("behaviorlist"));
    console.log("$scope.behaviorList",$scope.behaviorList )
    $scope.newIncident = {};


    $scope.newIncident = function () {
      $scope.recordedBehaviors = $filter('filter')
      ($scope.behaviorList, {checked : true});

    }

    $scope.newArray = [];
    $scope.behaviorClicked = function(b) {
      console.log(b.behaviorName);
      var action = b.behaviorName;
      var value = b.behaviorValue

       $scope.newArray.push({ [action]: value});
       // console.log($scope.newArray)
    }

  $scope.postIncident = function(name) {
    // console.log("incidents fired")
    var date = (new Date()).toLocaleString();
      $scope.newIncident = {
          infractionDate: date,
          Childname: name,
          incidents: $scope.newArray,
      }

   var ref = new Firebase("https://allowance-tracker.firebaseio.com/incidents");
   $scope.incidentList = $firebaseArray(ref);
   $scope.incidentList.$add($scope.newIncident);

}


}]);

