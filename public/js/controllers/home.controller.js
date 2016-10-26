(function() {
  angular.module('forecast-app') //getter syntax
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope){
    alert();
  }
}());
