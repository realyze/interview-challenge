angular.module( 'ngBoilerplate.robotArmy', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'army', {
    url: '/robots',
    views: {
      "main": {
        controller: 'RoboCtrl',
        templateUrl: 'robotArmy/robotArmy.tpl.html'
      }
    },
    data:{ pageTitle: 'Robots everywhere!' }
  });
})

.controller('RoboCtrl', function ($scope) {
    $scope.robotSource = '/build/assets/test.json';
})

/*
Loads JSON from a URL passed in as `robot-source` attribute and renders
buttons with types and labels according to the JSON.
Should update when `robot-source` changes.
*/
.directive( 'robotRenderer', function($http) {
});
