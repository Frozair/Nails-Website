(function(){
  'use-strict';

  angular
    .module('app.gallery')
    .controller('GalleryDialogController', GalleryDialogController);

  /* @ngInject */
  function GalleryDialogController(GalleryDialog, images, startIdx){
    var ctrl = this;
    console.debug(images);
    ctrl.currentIdx = startIdx;
    ctrl.currentImg = images[startIdx].url;
    ctrl.images = images;

    ctrl.nextImage = nextImageFunc;
    ctrl.prevImage = prevImageFunc;
    ctrl.close = GalleryDialog.close;

    function nextImageFunc(){
      if(ctrl.currentIdx < (ctrl.images.length - 1)){
        ctrl.currentIdx++;
        reloadCurrentImg();
      }
    }

    function prevImageFunc(){
      if(ctrl.currentIdx > 0){
        ctrl.currentIdx--;
        reloadCurrentImg();
      }
    }

    /* Helpers */
    function reloadCurrentImg(){
      ctrl.currentImg = ctrl.images[ctrl.currentIdx].url;
    }
  }
})();
