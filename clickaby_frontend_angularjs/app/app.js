'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.slider',
  'myApp.cadastro-cliente',
  'myApp.clientes',
  'myApp.pedidos',
  'myApp.pedidos-cliente',
  'myApp.cadastro-pedido-cliente',
  'myApp.edicao-cliente',
  'myApp.detalhes-pedido',
  'myApp.oferta-home-office'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]).constant('API_URL', 'https://bigcorp-api.herokuapp.com/ecommerce/v1')