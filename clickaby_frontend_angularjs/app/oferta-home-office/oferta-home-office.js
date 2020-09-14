angular.module('myApp.oferta-home-office', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/oferta-home-office', {
    templateUrl: 'oferta-home-office/oferta-home-office.html',
    controller: 'ofertaHomeOfficeCtrl'
  });
}])
.controller('ofertaHomeOfficeCtrl', function($scope) {

    $scope.produtos = [

    {
            nome: "Notebook Dell XPS 13",
            valor: 5300,
            imagem: "https://imagens.canaltech.com.br/produto/1578685050-7479-principal-m.png"
    },
    {
            nome: "Notebook Dell Vostro",
            valor: 3970,
            imagem: "https://29028l.ha.azioncdn.net/img/2020/06/produto/204972/19/large/notebook-dell-vostro-3480-intel-core-i5-ram-4gb-hd-1tb-windows-preto.jpg"
    },
    {
            nome: "Notebook Lenovo Thinkpad",
            valor: 5450,
            imagem: "https://images2.kabum.com.br/produtos/fotos/105022/notebook-lenovo-thinkpad-e490-intel-core-i5-8265u-8gb-500gb-windows-10-pro-14-20n9000gbr_1570627217_g.jpg"
    }

    ]

})