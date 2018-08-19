var app = angular.module( 'facturacionApp',[ 
		'ngRoute','jcs-autoValidate',
		'facturacionApp.configuracion',
		'facturacionApp.mensajes',
		'facturacionApp.notificaciones',
		'facturacionApp.clientes',
		'facturacionApp.clientesCtrl's
		'facturacionApp.dashboardCtrl'
		]);
//Exportar el idioma Español al  jcs-autoValidate
app.module('jcs-autoValidate').run([
		'defaultErrorMessageResolver'
		function(defaultErrorMessageResolver){
			defaultErrorMessageResolver.setI18FileRootPath('angular/lib');
			defaultErrorMessageResolver.setCulture('es-co');
		}
	]);


app.controller('mainCtrl', ['$scope', 'Configuracion','Mensajes', 'Notificaciones', function($scope, Configuracion,Mensajes, Notificaciones){
	
	$scope.config = {};
	$scope.mensajes = Mensajes.mensajes;
	$scope.notificaciones = Notificaciones.notificaciones;

	$scope.titulo = "";
	$scope.subtitulo = "";

	console.log( $scope.notificaciones );

	$scope.usuario = {
		nombre:"AlcDeveloper"
	}




	Configuracion.cargar().then( function(){
		$scope.config = Configuracion.config;
	});



	$scope.activar = function( menu , submenu , titulo , subtitulo){

		$scope.titulo = titulo;
		$scope.subtitulo = subtitulo;
		$scope.mDashboard = "";
		$scope.mClientes = "";

		$scope[menu] = "active";

	}


}]);


// ================================================
//   Rutas
// ================================================
app.config([ '$routeProvider', function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'dashboard/dashboard.html',
			controller:'dashboardCtrl'
		})
		.when('/clientes/:pag',{
			templateUrl: 'clientes/clientes.html',
			controller:'clientesCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})

}]);


// ================================================
//   Filtros
// ================================================
app.filter( 'quitarletra', function(){

	return function(palabra){
		if( palabra ){
			if( palabra.length > 1)
				return palabra.substr(1);
			else
				return palabra;
		}
	}
})

.filter( 'mensajecorto', function(){

	return function(mensaje){
		if( mensaje ){
			if( mensaje.length > 35)
				return mensaje.substr(0,35) + "...";
			else
				return mensaje;
		}
	}
})








