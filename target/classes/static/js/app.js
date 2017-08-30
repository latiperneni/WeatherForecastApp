var forecastApp = angular.module('forecastApp', ['ngRoute', 'ngResource', 'home', 'forecast', 'model','ngAppDirective']);

forecastApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "views/home.html",
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: "views/forecast.html",
            controller: 'forecastController'
        });
});
