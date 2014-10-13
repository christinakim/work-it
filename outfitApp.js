'use strict';

var outfitApp = angular.module("outfitApp", ['ngRoute', 'outfitControllers'];


outfitApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/confirm', {
        templateUrl: 'views/confirm.html',
        controller: 'FormCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);