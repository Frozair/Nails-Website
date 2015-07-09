(function(){
  angular
    .module('app.prices')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper){
    routerHelper.configureStates(getStates());
  }

  function getStates(){
    return [
      {
        state: 'prices',
        config: {
          url: '/prices',
          templateUrl: 'app/prices/prices.html',
          title: 'Prices',
          controller: 'PricesController',
          controllerAs: 'ctrl'
        }
      }
    ];
  }
})();
