app.controller('Home', function($rootScope, $location)
{
    $rootScope.activetab = $location.path();
});

app.controller('Search', function($rootScope, $location, $http)
{
//    var url = 'http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=Apple+Cake';
    var url = 'http://test.io/';
    $rootScope.activetab = $location.path();


//    $http.get(url).
//        success(function(data, status, headers, config)
//        {
//            console.log(data);
//        }).
//        error(function(data, status, headers, config)
//        {
//            console.log('erro');
//            console.log(data);
//        });


    $http({method: 'GET', url: url,
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
        }})
        .success(function(d){ console.log( "yay" ); })
        .error(function(d){ console.log( "nope" ); });
});
