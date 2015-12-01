angular
  .module('gevo-angular')
  .config(config);
 
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('channels', {
      url: '/channels',
      templateUrl: 'client/templates/channels.ng.html',
      controller: 'ChannelsCtrl'
    })
    .state('events', {
      url: '/events', /* this should be /events/:channelId */
      templateUrl: 'client/templates/events.ng.html',
      controller: 'EventsCtrl'
    })
    /*************/
    /* TEST ONLY */
    .state('test', {
      url: '/test',
      templateUrl: 'client/templates/test.ng.html',
      controller: 'TestCtrl'
    })
    /*************/
    ;

  $urlRouterProvider.otherwise('channels');
}
