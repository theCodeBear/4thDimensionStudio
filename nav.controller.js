'use strict';

angular.module('4thDimension')

.controller('NavCtrl', function($scope) {

  $scope.subMenus = { openPaintingsMenu: false, openGraphicsMenu: false, openEventsMenu: false };

  // $scope.openPaintingsMenu = false;
  // $scope.openGraphicsMenu = false;
  // $scope.openEventsMenu = false;

  $scope.toggleSubMenu = function(menu) {
    $scope.subMenus[menu] = !$scope.subMenus[menu];
    for (var submenu in $scope.subMenus) {
      if (submenu !== menu) {
        $scope.subMenus[submenu] = false;
      }
    }
  };

  $scope.closeSubMenus = function() {
    for (var submenu in $scope.subMenus) {
      $scope.subMenus[submenu] = false;
    }
  }

});