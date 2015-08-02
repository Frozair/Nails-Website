(function(){
  'use-strict';

  angular
    .module('app.gallery')
    .service('GalleryDialog', GalleryDialog);

  /* @ngInject */
  function GalleryDialog($mdDialog){
    this.show = showModal;
    this.close = closeModal;

    function showModal(images, index){
      $mdDialog.show({
        controller: 'GalleryDialogController',
        controllerAs: 'ctrl',
        parent: angular.element(document.body),
        templateUrl: '/app/gallery/gallery.dialog.html',
        locals: {
          images: images,
          startIdx: index
        }
      });
    }

    function closeModal(){
      $mdDialog.hide();
    }
  }
})();
