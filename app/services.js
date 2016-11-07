'use strict'

let sDataBaseAddress = 'https://nicolas.cloudant.com/cocktails/';
let oCategories = [];
let sCategory = "default";
let oCocktails = [];
let oCocktail = [];
let oLikes = [];

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
					// de fatsoenlijke manier
					//sDataBaseAddress + '_design/views/_view/cocktails?key=' + id
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
				if (oCocktails[i].value.cat_id == sCategory.cat_id) {
					aTemp.push(oCocktails[i].value);
				}
			}
			return aTemp;
		},
		fetchCocktail: function(id) {
			return $.getJSON(
				sDataBaseAddress + '_design/views/_view/cocktails',
				function(oData) {
					for (let i = 0; i < oData.rows.length; i++) {
						if (oData.rows[i].value.coc_id == id) {
							oCocktail = oData.rows[i];
						}
					}
				}
			);
		},
		fetchLikes: function(id) {
			return $.getJSON(
					sDataBaseAddress + '_design/views/_view/likes?key=' + id,
					function(oData) {
						oLikes = oData.rows;
					}
				);
		}
	};
})

.factory('cocktailSrv', function() {
	return {
		getCocktail: function() {
			console.log(oCocktail);
			return oCocktail.value;
		},
		getLikes() {
			let aTemp = [];
			for (let i = 0; i < oLikes.length; i++) {
				aTemp.push(oLikes[i].value);
			}
			return aTemp;
		}
	};
})