// angular.module('newchildstorage', [])
// .factory('addchildfactory', ["$firebaseArray",
//   function($firebaseArray) {
//     var ref = new Firebase("https://allowance-tracker.firebaseio.com/");
//     $firebaseArray(ref);
//     var newChild = {};
//     return {
//       set: function(key, value) {
//         newPost[key] = value;
//         console.log("key stored", key);
//         console.log("value stored", value);
//       },
//       get: function(key) {
//         if (newChild.hasOwnProperty(key)) {
//           return newChild[key];
//         }
//       }
//     };
//   }
// ]);