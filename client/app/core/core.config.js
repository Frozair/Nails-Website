(function(){
  angular
    .module('app.core')
    .config(configure);

    /* @ngInject */
    function configure($mdThemingProvider){
      $mdThemingProvider
        .theme('default');
    }

})();
