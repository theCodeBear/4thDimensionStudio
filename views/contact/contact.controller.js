'use strict';

angular.module('4thDimension')

.controller('ContactCtrl', function($scope) {

  $scope.sendEmail = function() {
    console.log('send email');
  };

});