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
          label: 'Acrylics',
          src: 'app/prices/acrylics-tab.html'
        },
        {
          label: 'Add-Ons',
          src: 'app/prices/addons-tab.html'
        },
        {
          label: 'Manicures/Pedicures',
          src: 'app/prices/mani-pedi-tab.html'
        }
      ];
    }
  }
})();
