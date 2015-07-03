(function(){
  'use-strict';

  angular
    .module('app.layout')
    .controller('TopBarController', TopBarController);

  /* @ngInject */
  function TopBarController($mdSidenav, $window){
    var ctrl = this;
    ctrl.toggle = toggleSideNav;
    ctrl.socialList = getSocialList();
    ctrl.open = openLink;

    function toggleSideNav(){
      $mdSidenav('left').toggle();
    }

    function getSocialList(){
      return [
        {
          name: 'Contact',
          img: '/images/social/email.png',
          href: '#'
        },
        {
          name: 'Twitter',
          img: '/images/social/twitter.png',
          href: 'https://twitter.com/theangelmarie'
        },
        {
          name: 'Instagram',
          img: '/images/social/instagram.png',
          href: 'https://instagram.com/theangelmarie'
        }
      ];
    }

    function openLink(url){
      if(url != '#')
        $window.open(url);
    }
  }

})();
