'use strict'

angular.module('App', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'assets/views/home.html',
      controller: 'homeCtrl'
    })
    .when('/category:category_id', {
    	templateUrl: 'assets/views/category.html',
    	controller: 'categoryCtrl'
    })
    .when('/coctail:coctail_id', {
    	templateUrl: 'assets/views/coctail.html',
    	controller: 'coctailCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
})
