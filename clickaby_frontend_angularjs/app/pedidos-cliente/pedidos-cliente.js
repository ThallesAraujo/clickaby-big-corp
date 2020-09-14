'use strict';

angular.module('myApp.pedidos-cliente', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pedidos-cliente/:idCliente', {
    templateUrl: 'pedidos-cliente/pedidos-cliente.html',
    controller: 'pedidosClienteCtrl'
  });
}])
.controller('pedidosClienteCtrl', function($scope, $http, $routeParams, $location, API_URL) {

  $scope.pedidosCliente = [];
  $scope.cliente = {}
  
  $scope.addOrder = function(){
    
    $location.path(`/cadastro-pedido-cliente/${$routeParams.idCliente}`);
  }

  $scope.getOrderDescription = function(produtos){
    if (produtos.length > 1){
      return `${produtos[0].nome} e mais ${produtos.length - 1}`
    }else{
      return produtos[0].nome
    }
  }

  $scope.orderDetails = function(orderId){
    $location.path(`/detalhes-pedido/${orderId}`);
  }

  $scope.getCliente = function() {
    $http.get(`${API_URL}/clientes/${$routeParams.idCliente}`).then(
      function(response){
        $scope.cliente = response.data
      }, 
      
      function(error){
        console.error(error)
      })
  }

  $scope.getPedidos = function() {

    $http.get(`${API_URL}/clientes/${$routeParams.idCliente}/pedidos`).then(
    function(response){
      $scope.pedidosCliente = response.data
    }, 
    
    function(error){
      console.error(error)
    })
  }

})