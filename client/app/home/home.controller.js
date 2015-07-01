(function(){
  'use-strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  /* @ngInject */
  function HomeController($state){
    var vm = this;
    vm.navigateTo = goTo;

    function goTo(state){
      $state.go(state);
    }
  }

})();
