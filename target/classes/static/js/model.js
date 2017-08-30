angular.module('model', []);
forecastApp.service('cityNameData', function () {
    this.data = '';
});

forecastApp.factory('getForecastDataFromGeoCoordinates', ['$http', '$q', function ($http, $q) {
    return {

        getCurrentLocationForecastData: function (lat, lon) {
            // var urlCtrl ='http://api.openweathermap.org/data/2.5/forecast/daily?';
            var deffered = $q.defer();
            $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?&lat=' + lat + '&lon=' + lon + '&APPID=a48e2db48a06dc414c3d4bf8a2016366')
                .success(function (data) {
                    deffered.resolve(data);
                });
            return deffered.promise;
        }

    }
}]);

forecastApp.factory('getForecastData', ['$http', '$q', function ($http, $q) {
    return {

        getForecastDatafromcityName: function (cityName) {
            // var urlCtrl ='http://api.openweathermap.org/data/2.5/forecast/daily?';
            var deffered = $q.defer();
            $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?&q=' + cityName + '&APPID=a48e2db48a06dc414c3d4bf8a2016366')
                .success(function (data) {
                    deffered.resolve(data);
                });
            return deffered.promise;
        }

    }
}]);

forecastApp.factory('Geolocation', ['$q', '$window', '$resource', '$http', '$rootScope', function ($q, $window, $resource, $http, $rootScope) {
    return {

        getPosition: function () {
            var d = $q.defer();
            window.navigator.geolocation.getCurrentPosition(function (pos) {
                d.resolve(pos);
                $rootScope.$apply();
            }, function (err) {
                $rootScope.$broadcast('geo:error', err);
                d.reject(pos);
                $rootScope.$apply();
            })
            return d.promise;
        }
    }

}]);

forecastApp.filter('tempConversion', function () {

    return function (input, unitOfConversion) {
        var output = '';
        if (input == null) {
            output = 'There is no input value to compute.Please check and try again';
        }
        else {

            if (unitOfConversion == 'Fahrenheit') {
                output = (1.8 * (input - 273)) + 32;
            }
            else if (unitOfConversion == 'Celsius') {
                output = input - 273.15;
            }
            else {
                output = 'Not an Valid Input. Please check and try again';
            }
        }
        return output;
    }
});


/* getcityNameFromPosition : function(lat,lng){
 //var googleKey ='AIzaSyBh7SY0O9Xor-Y7NRZISBLM4_PtdK_qlMY';
 var latlng = lat+','+lng;
 var deffered = $q.defer();
 $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=true')
 .success(function(data) {
 deffered.resolve(data);
 });
 return deffered.promise;
 }

 }*/



/*forecastApp.factory('getForecastData0', ['$http', '$resource', function ($http, $resource) {
 return {

 getFromResource: function (cityName0) {

 var forecastAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
 {callback: "JSON_CALLBACK"},
 {get: {method: "JSONP"}});
 var forecastData0 = forecastAPI.get({
 q: cityName0,
 cnt: 2,
 APPID: 'a48e2db48a06dc414c3d4bf8a2016366'
 });
 return forecastData0;
 }

 }
 }]);

 forecastApp.factory('getForecastData2',['$http','$q',function($http,$q){
 return{

 getFromhttp2 : function(cityName1){
 var urlCtrl ='http://api.openweathermap.org/data/2.5/forecast/daily?&q='+cityName1+'&cnt=2&APPID=a48e2db48a06dc414c3d4bf8a2016366';
 var deffered = $q.defer();
 $http({
 method: 'GET',
 url: urlCtrl ,
 params: {
 'format': 'json',
 'jsoncallback': 'JSON_CALLBACK',

 }
 }).success(function(data) {
 deffered.resolve(data);
 })

 return deffered.promise;
 }

 }
 }]); */




     
  