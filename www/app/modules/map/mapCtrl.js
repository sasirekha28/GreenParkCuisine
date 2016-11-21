angular.module('npApp.controllers')
    .controller("mapCtrl", function($scope, $state, $rootScope) {
        $scope.map = { center: { latitude:  28.5597033 , longitude: 77.20386800000006 }, zoom: 14 };
        //map options
        $scope.options = { scrollwheel: false };
    });
//latitude: 51.219053, longitude: 4.404418 