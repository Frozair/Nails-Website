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
              price: '$30.00'
            },
            {
              name: 'Fill',
              price: '$20.00'
            },
            {
              name: 'Repair',
              price: '$3.00'
            },
            {
              name: 'Pink & White',
              price: '$35.00'
            },
            {
              name: 'Glitter Acrylic',
              price: '$5.00'
            },
            {
              name: 'Gel polish over Acrylic',
              price: '$10.00'
            },
            {
              name: 'Any shape other than square',
              price: '$5.00'
            },
            {
              name: '3D Roses',
              price: '$5.00/Nail'
            }
          ]
        },
        {
          name: 'Other Services',
          list: [
            {
              name: 'Chrome',
              price: '$10.00/All nails or $3/Nail'
            },
            {
              name: 'Paraffin Treatment',
              price: '$10.00 (Hands or Feet)'
            },
            {
              name: 'Nail Art/ Embellishments',
              price: '$5.00+ (depends on request)'
            },
            {
              name: 'Unlimited Nail Art/Embellishments',
              price: '$25.00 / 50 min.'
            },
            {
              name: 'Polish Change',
              price: '$8.00'
            },
            {
              name: 'French',
              price: '$5.00'
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
