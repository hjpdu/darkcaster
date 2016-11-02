(function() {
    angular.module('forecast-app')
    .controller('DailyController', DailyController);

    DailyController.$inject = ['$scope', 'WeatherService'];


    function DailyController($scope, WeatherService){
      $scope.getWeather = getWeather;
      $scope.weather = WeatherService.weatherData;

      $scope.$watch(function(){
        return WeatherService.weatherData;
      }, function(newVal,oldVal){
        $scope.weather = WeatherService.weatherData;
      });

      function getWeather(latitude,longitude){
        $scope.showDaily = true;
        WeatherService.getWeather(latitude,longitude);
        $scope.dayLat = WeatherService.lat;
        $scope.dayLon = WeatherService.lon;
      }
    }

}());
