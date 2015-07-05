(function(){
  angular
    .module('app.gallery')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper){
    routerHelper.configureStates(getStates());
  }

  function getStates(){
    return [
      {
        state: 'gallery',
        config: {
          url: '/gallery',
          templateUrl: 'app/gallery/gallery.html',
          title: 'Gallery',
          controller: 'GalleryController',
          controllerAs: 'ctrl'
        }
      }
    ];
  }
})();
