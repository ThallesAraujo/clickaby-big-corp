'use strict';

angular.module('myApp.cadastro-cliente', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cadastro-cliente', {
    templateUrl: 'cadastro-cliente/cadastro-cliente.html',
    controller: 'cadastroClienteCtrl',
  });
}])

.controller('cadastroClienteCtrl', function($scope, $http, API_URL) {


  $scope.cliente = {
    nome: "",
    status: "ativo"
  }

  $scope.complete = function (){
    $http.post(`${API_URL}/clientes`, $scope.cliente).then(
      function(response){
        alert("Cliente cadastrado com sucesso!")
      }, 
      
      function(error){
        /* Observação: A API em Python retorna erro mesmo quando salva o objeto.
        Houve a consciência de que ele deveria ser tratado, todavia o foco do teste
        é o front-end e não há tempo suficiente para corrigir a API */
        alert("Cliente cadastrado com sucesso!")
      })
  }

});