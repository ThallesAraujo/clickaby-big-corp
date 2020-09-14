'use strict';

angular.module('myApp.detalhes-pedido', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detalhes-pedido/:idPedido', {
    templateUrl: 'detalhes-pedido/detalhes-pedido.html',
    controller: 'detalhesPedidoCtrl'
  });
}])
.controller('detalhesPedidoCtrl', function($scope, $http, $routeParams, $location, API_URL) {

  $scope.pedido = {};

  $scope.getPedido = function() {

    $http.get(`${API_URL}/pedidos/${$routeParams.idPedido}`).then(
    function(response){
      $scope.pedido = response.data
      console.log("Pedido escolhido", $scope.pedido)
    }, 
    
    function(error){
      console.error(error)
    })
  }

})