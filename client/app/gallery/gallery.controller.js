(function(){
  'use-strict';

  angular
    .module('app.gallery')
    .controller('GalleryController', GalleryController);

  /* @ngInject */
  function GalleryController(){
    var ctrl = this;
    ctrl.images = getImages();
    ctrl.openLightboxModal = openModal;

    function openModal(index){
      //Lightbox.openModal(ctrl.images, index);
    }

    function getImages(){
      var images = [];
      for(var i = 1; i <= 26; i++){
        images.push({
          url: '/images/gallery/' + i + '.jpg',
          thumbUrl: '/images/gallery/thumbs/' + i + '_tn.jpg',
        });
      }
      console.debug(images);
      return images;
    }
  }
})();
