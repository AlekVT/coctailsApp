'use strict'

angular.module('App')

.controller('homeCtrl', ['$scope', 'categorySrv', function homeCtrl($scope, categorySrv) {
	$scope.categoryNames;
	categorySrv.fetchCategories().then(function () { 
		let aTemp = [];
		let data = categorySrv.getCategoryNames();

		for (let i = 0; i < data.length; i++) {
			aTemp.push(data[i].value);
		};
		$scope.categoryNames = aTemp;
	});
	$scope.loaded = function() {
		$('#continue').text("click a categorie for more.");
	};
	$scope.categoryClick = function(cat) {
		categorySrv.setCategory(cat);
		categorySrv.fetchCocktails().then(function() {
			window.location.replace("#/category.html");
		});
	}
}])

.controller('categoryCtrl', ['$scope', 'categoriesSrv', function categoryCtrl($scope, categoriesSrv) {
	$scope.category = categoriesSrv.getCategoryName().name;
	$scope.cocktails = categoriesSrv.getCocktails();
	$scope.cocktailClick = function(id) {
		categoriesSrv.fetchCocktail(id).then(function() {
			categoriesSrv.fetchLikes(id).then(function() {
				window.location.replace("#/cocktail.html");
			})
		})
	}
}])

.controller('cocktailCtrl', ['$scope', 'cocktailSrv', function cocktailCtrl($scope, cocktailSrv) {
	$scope.cocktail = cocktailSrv.getCocktail();
	$scope.people = cocktailSrv.getLikes();
}])