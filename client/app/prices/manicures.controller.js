(function(){
  'use-strict';

  angular
    .module('app.prices')
    .controller('ManicuresController', ManicuresController);

  function ManicuresController(){
    var ctrl = this;
    ctrl.manicures = getManicures();

    function getManicures(){
      return [
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
          price: '$30.00/$40.00'
        },
        {
          name: 'Gel Manicure',
          description: 'Gel polish goes on like regular nail polish, ' +
            'requires no dry time and can last 10 to 14 days without chipping.',
          time: '35 min.',
          price: '$25.00'
        },
        {
          name: 'Gel Polish Removal',
          description: 'Please let me know if you will be requiring gel ' +
            'removal at the time of booking.',
          time: '20 min.',
          price: '$5.00/$10.00 (Removal Only)'
        }
      ];
    }
  }
})();
