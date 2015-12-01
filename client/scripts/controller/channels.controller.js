angular
  .module('gevo-angular')
  .controller('ChannelsCtrl', ChannelsCtrl);
 
function ChannelsCtrl ($scope) {
  // binds the meteor collection Channels into the angular scope
  $scope.channels = $scope.$meteorCollection(Channels, false);
}

