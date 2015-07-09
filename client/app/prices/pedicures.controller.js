(function(){
  'use-strict';

  angular
    .module('app.prices')
    .controller('PedicuresController', PedicuresController);

  function PedicuresController(){
    var ctrl = this;
    ctrl.pedicures = getPedicures();

    function getPedicures(){
      return [
        {
          name: 'Regular/Gel',
          description: 'Includes nail trimming & shaping, cuticle work, ' +
            'a calming chamomile Epsom salt soak, spearmint exfoliating scrub ' +
            'with warm towel wrap, a relaxing massage of the feet and ' +
            'legs topped off with the polish of your choice.',
          time: '45 min.',
          price: '$30.00/$40.00'
        },
        {
          name: 'Deluxe/Gel',
          description: 'Includes nail trimming & shaping, cuticle work, ' +
            'a calming chamomile Epsom salt soak, a spearmint exfoliating ' +
            'scrub, a detoxifying eucalyptus mask with warm towel wraps, a ' +
            'hydrating paraffin dip, a relaxing massage of the feet and ' +
            'legs topped off with the polish of your choice.',
          time: '60 min.',
          price: '$50.00/$60.00'            
        }
      ];
    }
  }
})();
