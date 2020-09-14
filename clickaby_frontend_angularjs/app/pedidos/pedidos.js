'use strict';

angular.module('myApp.pedidos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pedidos', {
    templateUrl: 'pedidos/pedidos.html',
  });
}])
.controller('pedidosCtrl', function($scope, $location, $http, API_URL) {

  console.log('$scope ->', $scope)

  $scope.pedidos = [];

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

  $scope.getPedidos = function() {

    $http.get(`${API_URL}/pedidos`).then(
    function(response){
      console.log('response', response)
      $scope.pedidos = response.data
    }, 
    
    function(error){
      console.error(error)
    })
  }

})