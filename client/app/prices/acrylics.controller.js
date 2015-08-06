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
              name: 'Short',
              price: '$25.00'
            },
            {
              name: 'Medium',
              price: '$28.00'
            },
            {
              name: 'Long',
              price: '$30.00'
            },
            {
              name: 'Fill',
              price: '$14.00'
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
              name: 'Glitter',
              price: '$5.00'
            }
          ]
        },
        {
          name: 'Other Services',
          list: [
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
            }
          ]
        }
      ];
    }
  }
})();
