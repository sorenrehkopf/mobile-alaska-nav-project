var app = angular.module('AlaskaNavApp',['ngRoute']);

app.config(function($routeProvider,$locationProvider){

	$locationProvider.hashPrefix('!');

	$routeProvider
	.when('/section/page_title',{
		templateUrl:'../views/page.html',
	})
	.otherwise({
		redirectTo:'/section/page_title'
	});

});