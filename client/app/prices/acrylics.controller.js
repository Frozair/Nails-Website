(function(){
  'use-strict';

  angular
    .module('app.prices')
    .controller('AcrylicsController', AcrylicsController);

  function AcrylicsController(){
    var ctrl = this;
    ctrl.services = getServices();

    function getServices(){
      return [
        {
          name: 'Acrylics',
          list: [
            {
              name: 'Full Set',
              price: '$30'
            },
            {
              name: 'Fill/Rebalance',
              price: '$20 (Applies to sets done by me)'
            },
            {
              name: 'Fill/Rebalance',
              price: '$25 (Applies to sets NOT done by me)'
            },
            {
              name: 'Repair',
              price: '$3'
            },
            {
              name: 'Pink & White',
              price: '$35'
            },
            {
              name: 'Glitter Acrylic',
              price: '$5'
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
              name: '3D Roses',
              price: '$5/Nail'
            },
            {
              name: 'Gel Polish Removal',
              price: '$5 (Acrylics)'
            },
            {
              name: 'Cut Down',
              price: '$10'
            }
          ]
        },
        {
          name: 'Other Services',
          list: [
            {
              name: 'Chrome or Holographic Powder',
              price: '$10/All nails or $3/Nail'
            },
            {
              name: 'Paraffin Treatment',
              price: '$10 (Hands or Feet)'
            },
            {
              name: 'Nail Art/ Embellishments',
              price: '$5+ (depends on request)'
            },
            {
              name: 'Unlimited Nail Art/Embellishments',
              price: '$25 / 50 min.'
            },
            {
              name: 'Polish Change',
              price: '$8'
            },
            {
              name: 'French',
              price: '$5'
            },
            {
              name: 'Travel Fee',
              price: '$20/destination (prices may vary depending on location)'
            }
          ]
        }
      ];
    }
  }
})();
