
  app.factory('Auth', function($firebaseAuth) {
  var usersRef = new Firebase("https://allowancetrackapp.firebaseio.com/");
  return $firebaseAuth(usersRef);
});