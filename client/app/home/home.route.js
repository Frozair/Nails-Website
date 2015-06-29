(function(){
  angular
    .module('app.home')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper){
    var otherwise = '/';
    routerHelper.configureStates(getStates(), otherwise);
  }

  function getStates(){
    return [
      {
        state: 'home',
        config: {
          url: '/',
          templateUrl: 'app/home/home.html',
          title: 'Home'
        }
      }
    ];
  }
})();
