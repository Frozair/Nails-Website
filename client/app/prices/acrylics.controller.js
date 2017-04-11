(function(){
  'use-strict';

  angular
    .module('app.prices')
    .controller('AcrylicsController', AcrylicsController);

  /* @ngInject */
  function AcrylicsController($sce){
    var ctrl = this;
    ctrl.services = getServices().map(function(ele) {
      return {
        name: ele.name,
        price: $sce.trustAsHtml(ele.price)
      };
    });

    function getServices(){
      return [
        {
          name: 'Full Set Base Price',
          price: '$35 (Short to Medium)<br />$40 (Long)<br />$45 (Extra Long)'
        },
        {
          name: 'Fill/Rebalance',
          price: '$25 (Applies to sets done by me)'
        },
        {
          name: 'Fill/Rebalance',
          price: '$35 (Applies to sets NOT done by me)'
        },
        {
          name: 'Overlay',
          price: '$25'
        },
        {
          name: 'Gel polish over Acrylic',
          price: '$10'
        },
        {
          name: 'Any shape other than square',
          price: '$5'
        },
        {
          name: 'Gel Polish Removal',
          price: '$5 (Acrylics)'
        },
        {
          name: 'Shape change',
          price: '$5 (Ex: Coffin to Almond)'
        },
        {
          name: 'Cut Down',
          price: '$10'
        },
        {
          name: 'Repair',
          price: '$3'
        },
        {
          name: 'Acrylic Soak Off',
          price: '$10 (45 min)'
        },
        {
          name: 'Glow in the Dark Acrylic Powder',
          price: '$15/$10 Fill Add-On'
        },
        {
          name: 'Glitter Acrylic',
          price: '$5/Nail or $10/All Nails'
        },
        {
          name: 'Ombre Acrylic',
          price: '$5/Nail or $10/All Nails'
        },
        {
          name: 'Encapuslated Nails',
          price: '$5/Nail or $10/All Nails'
        },
        {
          name: '3D Roses',
          price: '$5/Nail'
        },
        {
          name: 'Pink & White',
          price: '$35'
        }
      ];
    }
  }
})();
