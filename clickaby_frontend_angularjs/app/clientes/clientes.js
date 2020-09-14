'use strict';

angular.module('myApp.clientes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/clientes', {
    templateUrl: 'clientes/clientes.html',
  });
}])
.controller('clientesCtrl', function($scope, $http, $location, API_URL) {

  $scope.goToOrdersFromClient = function(idCliente){
    $location.path(`pedidos-cliente/${idCliente}`);
  }

  $scope.clientes = [];


  $scope.addClient = function() {
    $location.path('cadastro-cliente');
  }

  $scope.editClient = function(clienteId){
    $location.path(`edicao-cliente/${clienteId}`);
  }

  $scope.getClientes = function() {

    $http.get(`${API_URL}/clientes`).then(
    function(response){
      console.log('response', response)
      $scope.clientes = response.data
    }, 
    
    function(error){
      console.error(error)
    })
  }

})