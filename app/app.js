var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
    $locationProvider.html5Mode(false);
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'Home'
        })
        .when('/search', {
            templateUrl: 'app/views/search.html',
            controller: 'Search'
        })
        .otherwise({
            redirectTo: '/'
        });
});