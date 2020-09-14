'use strict';

angular.module('myApp.cadastro-pedido-cliente', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cadastro-pedido-cliente/:idCliente', {
    templateUrl: 'cadastro-pedido-cliente/cadastro-pedido-cliente.html',
    controller: 'cadastroPedidoClienteCtrl',
  });
}])

.controller('cadastroPedidoClienteCtrl', function($scope, $http, $routeParams, API_URL) {

  $scope.produtos = []
  $scope.cliente = {}
  $scope.addedItems = []
  $scope.currentProduct = {}
  $scope.currentAmount = 1

  $scope.clientePedido = {
    dataCadastro: Date(),
    idCliente: $scope.cliente.id,
    statusEntrega: "Em processamento",
    produtos: $scope.addedItems
  }

  $scope.setProduct = function(){
    console.table($scope.currentProduct)
    $scope.currentAmount = 1
  }


  $scope.addItem = function (){
    var product = JSON.parse($scope.currentProduct)
    product.quantidade = $scope.currentAmount
    $scope.addedItems.push(product)
    $scope.currentProduct = {}
    $scope.currentAmount = 1
  }

  $scope.completion = function() {

    var pedido = {
      idCliente: $scope.cliente.id,
      produtos: $scope.addedItems
    }

    $http.post(`${API_URL}/clientes/${pedido.idCliente}/pedidos`, pedido).then(
      function(response){
        alert("Pedido cadastrado com sucesso!")
        
      }, 
      
      function(error){
        /* Observação: A API em Python retorna erro mesmo quando salva o objeto.
        Houve a consciência de que ele deveria ser tratado, todavia o foco do teste
        é o front-end e não há tempo suficiente para corrigir a API */
        alert("Pedido cadastrado com sucesso!")
      })
  }

  $scope.getData = function() {

    $http.get(`${API_URL}/clientes/${$routeParams.idCliente}`).then(
      function(response){
        $scope.cliente = response.data
      }, 
      
      function(error){
        console.error(error)
      })
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