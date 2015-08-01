(function(){
  'use-strict';

  angular
    .module('app.layout')
    .controller('SideBarController', SideBarController);

  /* @ngInject */
  function SideBarController($mdSidenav, $window, $state){
    var ctrl = this;
    ctrl.socialList = getSocialList();
    ctrl.navRoutes = getNavRoutes();
    ctrl.open = openLink;
    ctrl.navigateTo = navigateToFunc;

    function getSocialList(){
      return [
        // {
        //   name: 'Contact',
        //   img: '/images/social/email.png',
        //   href: '#/contact'
        // },
        {
          name: 'Tumblr',
          img: '/images/social/tumblr.png',
          href: 'http://theangelmarie.tumblr.com/'
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

    function getNavRoutes() {
      return [
        {
          name: 'Home',
          state: 'home'
        },
        {
          name: 'Gallery',
          state: 'gallery'
        },
        {
          name: 'Prices',
          state: 'prices'
        },
        {
          name: 'Contact',
          state: 'contact'
        },
        {
          name: 'About',
          state: 'about'
        }
      ];
    }

    function openLink(url){
      if(url != '#')
        $window.open(url);
    }

    function navigateToFunc(index){
      var state = ctrl.navRoutes[index].state;
      if(state !== '')
        $state.go(state);
      $mdSidenav('left').close();
    }
  }
})();
