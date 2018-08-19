var app = angular.module('facturacionApp.dashboardCtrl',[]);


app.controller('dashboardCtrl',['$scope' , function($scope){
	$scope.activar('mDashboard' , '' , 'Dashboard' , 'Información' );
}]);