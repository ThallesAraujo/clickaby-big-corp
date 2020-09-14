'use strict';

angular.module('myApp.slider', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'slider/slider.html',
    controller: 'sliderCtrl',
  });
}])
.controller('sliderCtrl', function($scope, $location, $http, API_URL) {

  $scope.produtos = []

  $scope.specialPromo = function(){
    $location.path("/oferta-home-office")
  }

  $scope.getProdutos = function() {

    $http.get(`${API_URL}/produtos`).then(
    function(response){
      console.log('produtos ->', response.data)
      $scope.produtos = response.data
    }, 
    
    function(error){
      console.error(error)
    })
  }

});