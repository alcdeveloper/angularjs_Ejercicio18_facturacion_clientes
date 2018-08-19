var app = angular.module('facturacionApp.clienteCtrl',[]);


app.controller('clienteCtrl',['$scope' , 'Clientes' ,'$routeParams'  ,function($scope , Clientes , $routeParams){
	
	var pag= $routeParams.pag;
	$scope.activar('mClientes','' , 'Clientes' , 'Listado clientes');
	$scope.clientes = {};
	$scope.clienteSel = {};



	$scope.moverA = function(pag) {
		Clientes.cargarPagina(pag).then(function(){
			$scope.clientes = Clientes;
		})
	}


	$scope.moverA(pag);




	$scope.mostrarModal = function( cliente){

		console.log(cliente);

		angular.copy(cliente , $scope.clienteSel)

		$("#modal_cliente").modal();
	}

	$scope.guardar = function(cliente , frmCliente){
		Clientes.guardar(cliente).then(function(){

			$("#modal_cliente").modal('hide');
			$scope.clienteSel = {}; 
			frmCliente.autoValidateFormOptions.resetForm();
		})
	}
}]);