
  app.factory('Auth', function($firebaseAuth) {
  var usersRef = new Firebase("https//allowance-tracker.firebaseio.com");
  return $firebaseAuth(usersRef);
});