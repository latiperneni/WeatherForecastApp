angular.module('home', []);
forecastApp.controller('homeController', ['$scope', '$rootScope', 'cityNameData', 'Geolocation', 'getForecastData', 'getForecastDataFromGeoCoordinates', function ($scope, $rootScope, cityNameData, Geolocation, getForecastData, getForecastDataFromGeoCoordinates) {

    $scope.gPlace;
    $scope.cityName = '';
    $rootScope.TempConvertUnits='Fahrenheit';
    $rootScope.tempConversionForDirective=$rootScope.TempConvertUnits;

    $scope.setTempConvertUnits = function(selectedChoice){

        if(selectedChoice =='F')
            $scope.TempConvertUnits='Fahrenheit';
        else
            $scope.TempConvertUnits='Celsius';
        
        if($scope.TempConvertUnits){
            $scope.tempConversionForDirective=$scope.TempConvertUnits;
        }
    };

    $scope.setCityName = function () {
        cityNameData.data = $scope.cityName;
    }

    Geolocation.getPosition()
        .then(function (pos) {
            $scope.latitude = pos.coords.latitude;
            $scope.longitude = pos.coords.longitude;
            getForecastDataFromGeoCoordinates.getCurrentLocationForecastData($scope.latitude, $scope.longitude)
                .then(function (data) {
                    $scope.currentPositionForecastDataList = data.list;
                    console.log("currentPositionForecastDataList: ",$scope.currentPositionForecastDataList);
                });

        });


}]);



