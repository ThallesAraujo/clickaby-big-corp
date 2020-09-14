'use strict';

angular.module('myApp.edicao-cliente', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edicao-cliente/:idCliente', {
    templateUrl: 'edicao-cliente/edicao-cliente.html',
    controller: 'edicaoClienteCtrl',
  });
}])

.controller('edicaoClienteCtrl', function($scope, $http, $routeParams, API_URL) {

  $scope.cliente = {}
  $scope.getCliente = function() {
    $http.get(`${API_URL}/clientes/${$routeParams.idCliente}`).then(
      function(response){
        $scope.cliente = response.data
      }, 
      
      function(error){
        console.error(error)
      })
  }

  $scope.complete = function (){
    $http.put(`${API_URL}/clientes`, $scope.cliente).then(
      function(response){
        print(response)
      }, 
      
      function(error){
        console.error(error)
      })
  }

});