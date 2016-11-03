(function() {
  angular.module('forecast-app')
  .controller('HourlyController', HourlyController);

   HourlyController.$inject = ['$scope', 'WeatherService'];

   function HourlyController($scope, WeatherService){
     $scope.showHourly = false;
     $scope.getWeather = getWeather;
     $scope.weather = WeatherService.weatherData;

     $scope.$watch(function(){
       return WeatherService.weatherData;
     }, function(newVal,oldVal){
       $scope.weather = WeatherService.weatherData;
     });

     function getWeather(latitude, longitude){
       $scope.showHourly = true;
       WeatherService.getWeather(latitude,longitude);
       $scope.hourLat = WeatherService.lat;
       $scope.hourLon = WeatherService.lon;

     }
   }
}());
