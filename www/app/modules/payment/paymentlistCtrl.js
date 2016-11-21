angular.module('npApp.controllers')
.controller("paymentlistCtrl", function($scope, $state, $rootScope) {
	console.log('caling.....');
	 function init() {
        $rootScope.paymentHistory = [];
	$rootScope.paymentHistory = JSON.parse(localStorage.getItem($rootScope.profileInformation.email));
    }
    init();
	
});