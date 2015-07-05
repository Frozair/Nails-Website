(function(){
  'use-strict';

  angular
    .module('app.layout')
    .controller('TopBarController', TopBarController);

  /* @ngInject */
  function TopBarController($mdSidenav, $window){
    var ctrl = this;
    ctrl.toggle = toggleSideNav;

    function toggleSideNav(){
      $mdSidenav('left').toggle();
    }
  }

})();
