(function(){
  angular
    .module('app.about')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper){
    routerHelper.configureStates(getStates());
  }

  function getStates(){
    return [
      {
        state: 'about',
        config: {
          url: '/about',
          templateUrl: 'app/about/about.html',
          title: 'About'
        }
      }
    ];
  }
})();
