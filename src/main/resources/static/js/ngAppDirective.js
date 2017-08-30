angular.module("ngAppDirective", []);

forecastApp.directive('autocompleteCityname', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, model) {
            var options = {
                types: []
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
            google.maps.event.addListener(scope.gPlace, 'place_changed', function () {
                scope.$apply(function () {
                    model.$setViewValue(element.val());
                });
            });
        }
    };
});


forecastApp.directive('tableResult', function () {
    return {
        templateUrl:'views/tableResult.html',
        replace:'true',
        scope:{
            iterateList:"=",
            tempConversionForDirective:"@"
        }
    };
});