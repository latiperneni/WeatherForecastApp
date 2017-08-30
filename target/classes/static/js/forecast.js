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


/* $scope.methodSelectFlag = false;
 $scope.allMethods = [
 {
 id: '0',
 details: '$resource'
 },
 {
 id: '1',
 details: '$http Impl1'
 },
 {
 id: '2',
 details: '$http Impl2'
 }];
 */


/*$scope.setselectedMethod = function () {

 console.log("selectedMethodDetail", $scope.selectedMethodDetail.id);

 $scope.methodSelectFlag = true;

 var serviceName = 'forecastData' + $scope.selectedMethodDetail.id;

 if ($scope.selectedMethodDetail.id === 0) {
 $scope.forecastData0 = getForecastData0.getFromResource($scope.cityName);
 $scope.serviceSelectList = $scope.forecastData0.list;
 }

 else if ($scope.selectedMethodDetail.id === 1) {
 getForecastData1.getFromhttp($scope.cityName).then(function (data1) {
 $scope.forecastData1 = data1;
 });

 $scope.serviceSelectList = $scope.forecastData1.list;

 }

 else {

 $scope.serviceSelectList = $scope.forecastData2.list;

 }

 console.log("serviceSelect", $scope.serviceSelectList);

 };

 getForecastData2.getFromhttp2($scope.cityName).then(function (data2) {
 $scope.forecastData2 = data2;
 });
 */


