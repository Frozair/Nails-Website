(function(){
  'use-strict';

  angular
    .module('app.gallery')
    .controller('GalleryController', GalleryController);

  /* @ngInject */
  function GalleryController(GalleryDialog, $http){
    var TOTAL_IMAGES = 33;

    var ctrl = this;
    ctrl.images = [];
    ctrl.openSlideshowModal = openModal;
    ctrl.closeGallery = closeGallery;
    ctrl.options = {
      index: 0,
      history: false
    };
    ctrl.isGalleryOpen = false;

    getImages();

    function openModal(index)
    {
      if(angular.isDefined(index)) {
        ctrl.options.index = index;
      }

      ctrl.isGalleryOpen = true;
    }

    function getImages()
    {
      $http({
        method: 'GET',
        url: '/public/data.json'
      }).then(successCallback, errorCallBack);
    }

    function successCallback(response)
    {
      angular.forEach(response.data.resources, function(value, key) {
        var img = {
          src: value.url,
          w: value.width,
          h: value.height,
          thumbUrl: value.url
        };

        this.push(img);
      }, ctrl.images);
    }

    function errorCallBack(response)
    {
      console.log(response);
    }

    function closeGallery() {
      ctrl.isGalleryOpen = false;
    }
  }
})();
