(function(){
  var core = angular.module('app.core');

  core.config(configure);

  /* @ngInject */
  function configure($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('404', {
        url: '/404',
        templateUrl: 'core/404.html'
      });
  }
})();
