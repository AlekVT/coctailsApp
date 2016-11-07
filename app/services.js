'use strict'

let sDataBaseAddress = 'https://nicolas.cloudant.com/cocktails/';
let oCategories = [];
let sCategory = "default";
let oCocktails = [];
let oCocktail = [];

angular.module('App')

.factory('categorySrv', [function() {
	return {
		fetchCategories: function() {
			return $.getJSON(
				sDataBaseAddress + '_design/views/_view/categories',
				function (oData) {
					oCategories = oData.rows;
				}
			);
		},
		getCategoryNames: function() {
			return oCategories;
		},
		setCategory: function(cat) {
			sCategory = cat;
		},
		fetchCocktails: function() {
			return $.getJSON(
				sDataBaseAddress + '_design/views/_view/cocktails',
				function (oData) {
					oCocktails = oData.rows;
				}
			);
		},
	};
}])

.factory('categoriesSrv', function() {
	return {
		getCategoryName: function() {
			return sCategory;
		},
		getCocktails: function() {
			let aTemp = [];
			for (let i = 0; i < oCocktails.length; i++) {
				aTemp.push(oCocktails[i].value);
			}
			return aTemp;
		},
		fetchCocktail: function() {
			return $.getJSON(
				sDataBaseAddress + '',
				function() {
					//something happens here.
				}
			);
		}
	};
})