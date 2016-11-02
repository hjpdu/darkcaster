(function() {
  angular.module('forecast-app')
  .controller('MinutelyController', MinutelyController);

  MinutelyController.$inject = ['$scope', 'WeatherService'];

  function MinutelyController($scope,WeatherService){
    $scope.getWeather = getWeather;
    $scope.weather = WeatherService.weatherData;

    $scope.$watch(function(){
      return WeatherService.weatherData;
    }, function(newVal, oldVal){
      $scope.weather = WeatherService.weatherData;
    });


    function getWeather(latitude,longitude){
      WeatherService.getWeather(latitude,longitude);
    }
  }
}());
