'use strict';

angular.module('4thDimension', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'views/home/home.html'
  })

  .state('classes', {
    url: '/classes',
    templateUrl: 'views/classes/classes.html'
  })

  .state('paintingsMurals', {
    url: '/paintingsMurals',
    templateUrl: 'views/paintingsMurals/paintingsMurals.html'
  })

  .state('paintings', {
    url: '/paintings',
    templateUrl: 'views/paintings/paintings.html'
  })

  .state('murals', {
    url: '/murals',
    templateUrl: 'views/murals/murals.html'
  })

  .state('graphicsIllustrations', {
    url: '/graphicsIllustrations',
    templateUrl: 'views/graphicsIllustrations/graphicsIllustrations.html'
  })

  .state('graphics', {
    url: '/graphics',
    templateUrl: 'views/graphics/graphics.html'
  })

  .state('illustrations', {
    url: '/illustrations',
    templateUrl: 'views/illustrations/illustrations.html'
  })

  .state('events', {
    url: '/events',
    templateUrl: 'views/events/events.html'
  })

  .state('workshops', {
    url: '/workshops',
    templateUrl: 'views/workshops/workshops.html'
  })

  .state('figureDrawing', {
    url: '/figureDrawing',
    templateUrl: 'views/figureDrawing/figureDrawing.html'
  })

  .state('contact', {
    url: '/contact',
    templateUrl: 'views/contact/contact.html',
    controller: 'ContactCtrl'
  });

})