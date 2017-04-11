(function(){
  'use-strict';

  angular
    .module('app.prices')
    .controller('ManiPediController', ManiPediController);

  function ManiPediController(){
    var ctrl = this;
    ctrl.services = getServices();

    function getServices(){
      return [
        {
          name: 'Manicures',
          items: [
            {
              name: 'Regular',
              description: 'Includes nail trimming & shaping,' +
               'cuticle work, a relaxing massage of the hands' +
               'and arms topped off with the polish of your choice.',
              time: '35 min.',
              price: '$15.00'
            },
            {
              name: 'Deluxe/Gel',
              description: 'Includes nail trimming & shaping, cuticle work, a ' +
                'detoxifying mask with warm towel wrap, a hydrating ' +
                'paraffin dip, a relaxing massage of the hands and arms ' +
                'topped off with the polish of your choice.',
              time: '45 min.',
              price: '$35.00/$45.00'
            },
            {
              name: 'Gel Manicure',
              description: 'Gel polish goes on like regular nail polish, ' +
                'requires no dry time and can last 10 to 14 days without chipping.',
              time: '35 min.',
              price: '$30.00'
            },
            {
              name: 'Gel Polish Removal',
              description: 'Please let me know if you will be requiring gel ' +
                'removal at the time of booking.',
              time: '20 min.',
              price: '$5.00/$10.00 (Removal Only)'
            }
          ]
        },
        {
          name: 'Pedicures',
          items: [
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
          ]
        }
      ];
    }
  }
})();
