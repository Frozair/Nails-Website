(function(){
  'use-strict';

  angular
    .module('app.gallery')
    .controller('GalleryController', GalleryController);

  /* @ngInject */
  function GalleryController(GalleryDialog){
    var TOTAL_IMAGES = 33;

    var ctrl = this;
    ctrl.images = getImages();
    ctrl.openSlideshowModal = openModal;

    function openModal(index){
      GalleryDialog.show(ctrl.images, index);

      //Lightbox.openModal(ctrl.images, index);
    }

    function getImages(){
      var images = [];
      for(var i = 1; i <= TOTAL_IMAGES; i++){
        images.push({
          url: '/images/gallery/' + i + '.jpg',
          thumbUrl: '/images/gallery/thumbs/' + i + '_tn.jpg',
        });
      }
      return images;
    }
  }
})();
