(function(){
  'use-strict';

  angular
    .module('app.prices')
    .controller('PricesController', PricesController);

  function PricesController(){
    var ctrl = this;
    ctrl.tabs = getTabs();

    function getTabs(){
      return [
        {
          label: 'Manicures',
          src: 'app/prices/manicures-tab.html'
        },
        {
          label: 'Pedicures',
          src: 'app/prices/pedicures-tab.html'
        },
        {
          label: 'Acrylics/Other',
          src: 'app/prices/acrylics-tab.html'
        }
      ];
    }
  }
})();
