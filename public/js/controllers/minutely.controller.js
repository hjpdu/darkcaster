(function() {
  angular.module('forecast-app')
         .controller('MinutelyController', MinutelyController);

  MinutelyController.$inject = ['$scope', 'WeatherService'];

  function MinutelyController($scope,WeatherService){
    $scope.showMinutely = false;
    $scope.getWeather = getWeather;
    $scope.weather = WeatherService.weatherData;
    $scope.minuteLat = WeatherService.lat;
    $scope.minuteLon = WeatherService.lon;


    $scope.$watch(function(){
      return WeatherService.weatherData;
    }, function(newVal, oldVal){
      $scope.weather = WeatherService.weatherData;
    });

    function getWeather(latitude,longitude){
      $scope.showMinutely = true;
      WeatherService.getWeather(latitude,longitude);
      $scope.minuteLat = WeatherService.lat;
      $scope.minuteLon = WeatherService.lon;

    }
  }
}());
