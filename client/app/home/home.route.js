(function(){
  angular
    .module('app.home')
    .config(configure);

  /* @ngInject */
  function configure($stateProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      });
  }
})();
