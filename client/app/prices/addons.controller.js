(function(){
  'use-strict';

  angular
    .module('app.prices')
    .controller('AddOnsController', AddOnsController);

  function AddOnsController(){
    var ctrl = this;
    ctrl.services = getServices();

    function getServices(){
      return [
        {
          name: 'Chrome or Holographic Powder',
          price: '$15/All nails or $3/Nail'
        },
        {
          name: 'Rainbow Crystals',
          price: '$3-$7/Nail (Depends on req)'
        },
        {
          name: 'Swarovski Crystals',
          price: '$7-$10/Nail (Depends on req)'
        },
        {
          name: 'Nail Stamp',
          price: '$3/Nail'
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
          name: 'Gel Polish Change Only',
          price: '$15 (Does not include gel polish removal)'
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
          name: 'Paraffin Treatment',
          price: '$10 (Hands or Feet)'
        },
        {
          name: 'Travel Fee',
          price: '$25/destination (prices may vary depending on location)'
        }
      ];
    }
  }
})();
