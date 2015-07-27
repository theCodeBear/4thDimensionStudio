'use strict';

angular.module('4thDimension')

.controller('PaintingsCtrl', function($scope) {

  $(document).ready(function(){
    $('.carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next')
    });
  });

});