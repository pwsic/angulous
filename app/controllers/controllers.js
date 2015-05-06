app.controller('Home', function($rootScope, $location)
{
    $rootScope.activetab = $location.path();
});

app.controller('Search', function($rootScope, $location, $http)
{
    $rootScope.activetab = $location.path();
});
