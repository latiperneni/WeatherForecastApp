angular.module('forecast', []);
forecastApp.controller('forecastController', ['$scope', 'cityNameData', 'getForecastData', function ($scope, cityNameData, getForecastData) {

    $scope.setTempConvertUnits = function(selectedChoice){
        if(selectedChoice =='F')
            $scope.TempConvertUnits='Fahrenheit';
        else
            $scope.TempConvertUnits='Celsius';

        if($scope.TempConvertUnits){
            $scope.tempConversionForDirective=$scope.TempConvertUnits;
        }
    };

    $scope.cityName = cityNameData.data;
    getForecastData.getForecastDatafromcityName($scope.cityName).then(function (data) {
        $scope.userSelectedCityForeCastDataList = data.list;
    });

}]);



