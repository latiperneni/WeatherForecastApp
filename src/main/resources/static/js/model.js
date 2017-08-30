angular.module('model', []);
forecastApp.service('cityNameData', function () {
    this.data = '';
});

forecastApp.factory('getForecastDataFromGeoCoordinates', ['$http', '$q', function ($http, $q) {
    return {

        getCurrentLocationForecastData: function (lat, lon) {
            var deffered = $q.defer();
            $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?&lat=' + lat + '&lon=' + lon + '&APPID=appid')
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
            var deffered = $q.defer();
            $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?&q=' + cityName + '&APPID=appid')
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
