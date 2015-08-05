(function(){
  'use-strict';

  angular
    .module('app.gallery')
    .controller('GalleryDialogController', GalleryDialogController);

  /* @ngInject */
  function GalleryDialogController(GalleryDialog, images, startIdx){
    var _imgHolder;
    var ctrl = this;
    console.debug(images);
    ctrl.currentIdx = startIdx;
    ctrl.images = images;

    ctrl.nextImage = nextImageFunc;
    ctrl.prevImage = prevImageFunc;
    ctrl.close = GalleryDialog.close;

    angular.element(document).ready(setup);

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

      var ratio = 0;  // Used for aspect ratio
      var width = _imgHolder.width;    // Current image width
      var height = _imgHolder.height;  // Current image height
      var maxWidth = 600;     // Max width for the image
      var maxHeight = 800;    // Max height for the image

      // Check if the current width is larger than the max
      if(width > maxWidth){
        ratio = maxWidth / width;   // get ratio for scaling image
        _imgHolder.style.width = maxWidth + 'px';   // Set new height
        _imgHolder.style.height = (height * ratio) + 'px';    // Scale width based on ratio
        height = height * ratio;    // Reset height to match scaled image
        width = width * ratio;    // Reset width to match scaled image
      }

      // Check if current height is larger than max
      if(height > maxHeight){
        ratio = maxHeight / height; // get ratio for scaling image
        _imgHolder.style.height = maxHeight + 'px';   // Set new height
        _imgHolder.style.width = (width * ratio) + 'px';    // Scale width based on ratio
        width = width * ratio;    // Reset width to match scaled image
        height = height * ratio;    // Reset height to match scaled image
      }
    }

    function setup(){
      _imgHolder = document.getElementById('slideshowImg');
      reloadCurrentImg();
    }
  }
})();
