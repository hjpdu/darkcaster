(function() {
  angular.module('forecast-app') //getter syntax
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'WeatherService'];

  function HomeController($scope, WeatherService){
    $scope.getWeather = getWeather;
    $scope.weather = WeatherService.weatherData;

    $scope.$watch(function(){
      return WeatherService.weatherData;
    }, function(newVal, oldVal){
      $scope.weather = WeatherService.weatherData;
    });

    function getWeather(latitude, longitude){
      WeatherService.getWeather(latitude, longitude);
    }
    // function log(){
    //   console.log(WeatherService.weatherData);
    // }
  }
}());
