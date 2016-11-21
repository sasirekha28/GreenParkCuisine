angular.module('npApp.controllers')
    .controller("myprofileCtrl", function($scope, $state, $rootScope) {
       

$scope.back2home = function(){
	$state.go('app.home');
}



    });