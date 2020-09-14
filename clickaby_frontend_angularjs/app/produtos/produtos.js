'use strict';

angular.module('myApp.cadastro-cliente', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cadastro-cliente', {
    templateUrl: 'cadastro-cliente/cadastro-cliente.html',
    controller: 'cadastroClienteCtrl',
  });
}])

.controller('cadastroClienteCtrl', [function() {
}]);