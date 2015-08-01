(function(){
  'use-strict';

  angular
    .module('app.layout')
    .controller('TopBarController', TopBarController);

  /* @ngInject */
  function TopBarController($mdSidenav, $window, $state){
    var ctrl = this;
    ctrl.toggle = toggleSideNav;
    ctrl.getCurrentState = getCurrentStateFunc;

    function toggleSideNav(){
      $mdSidenav('left').toggle();
    }

    function getCurrentStateFunc(){
      return $state.current.title;
    }
  }

})();
