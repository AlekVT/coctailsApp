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
    .when('/cocktail:cocktail_id', {
    	templateUrl: 'assets/views/cocktail.html',
    	controller: 'cocktailCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
})
