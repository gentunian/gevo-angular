angular
  .module('gevo-angular')
  .controller('EventsCtrl', EventsCtrl);
 
function EventsCtrl ($scope) {
  // binds the meteor Events collection in angular scope
  $scope.events = $scope.$meteorCollection(Events, false);
}
