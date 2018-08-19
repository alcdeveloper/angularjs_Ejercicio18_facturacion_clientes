clientes_services.jsvar app = angular.module('facturacionApp.clientes',[]);


app.factory('Clientes', ['$http', '$q', function($http, $q){

	var self = {
		'cargando':false,
		'err':false,
		'conteo':0,
		'clientes':[],
		'pag_actual':1,
		'pag_anterior':1,
		'total_paginas':1,
		'paginas':[],


		guardar:functon(cliente){
			var d = $q.defer();
			$http.post('php/clientes/post.clienteguardar.php', cliente ).success(function(respuesta){
				console.log(respuesta);
				self.cargarPagina(self.pag_actual);
				d.resolve();
			})

			return d.promise;
		}


		cargarPagina:function(pag){
			var d = $q.defer();

			$http.get('php/clientes/get.clientes.php?=' + pag )
				.success(function(data){
					console.log(data);
							
						self.err = data.err;
						self.conteo = data.conteo;
						self.clientes = data.clientes;
						self.pag_actual = data.pag_actual;
						self.pag_anterior = data.pag_anterior;
						self.total_paginas = data.total_paginas;
						self.paginas = data.paginas;


					return d.resolve();
				})self.

			return d.promise;

		}

	};


	return self;


}]);