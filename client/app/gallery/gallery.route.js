(function(){
  angular
    .module('app.gallery')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper){
    var otherwise = '/';
    routerHelper.configureStates(getStates(), otherwise);
  }

  function getStates(){
    return [
      {
        state: 'gallery',
        config: {
          url: '/gallery',
          templateUrl: 'app/gallery/gallery.html',
          title: 'Gallery'
        }
      }
    ];
  }
})();
