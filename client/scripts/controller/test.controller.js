angular
  .module('gevo-angular')
  .controller('TestCtrl', function ($scope) {
      $scope.events = $scope.$meteorCollection(Events, false);
  });
