(function(){
  'use-strict';

  angular
    .module('app.gallery')
    .controller('GalleryController', GalleryController);

  /* @ngInject */
  function GalleryController($http)
  {
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
      var ratio = 1;
      if( window.innerHeight > window.innerWidth )
      {
        ratio = window.innerWidth / window.innerHeight;
      } else {
        ratio = window.innerHeight / window.innerWidth;
      }
      console.log(ratio);

      var url = "//res.cloudinary.com/angelmarie/image/upload";

      angular.forEach(response.data.resources, function(value, key) {
        var w, h;

        if( value.width > value.height )
        {
          w = value.width * ratio;
          h = value.height * ratio;
        } else {
          w = value.height * ratio;
          h = value.width * ratio;
        }

        // w = 500;
        // h = 500;
        var thumbUrl = url + "/w_300,h_300,c_fill/v" + value.version + "/" + value.public_id + "." + value.format;
        // var srcUrl   = url + "/";

        var img = {
          src: value.url,
          w: w,
          h: h,
          thumbUrl: thumbUrl
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
