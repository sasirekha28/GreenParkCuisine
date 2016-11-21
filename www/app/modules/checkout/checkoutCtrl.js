angular.module('npApp.controllers')
    .controller("checkoutCtrl", function($scope, $state, $ionicPopup, $rootScope) {
        $scope.paymentInformation = [];
        $scope.pay = {};
        $scope.totalAmount = 0;

$scope.getPrice = function() {
            
            angular.forEach($rootScope.cartDetails, function(value, key) {
              var totalPrice =value.subTotal;
                $scope.totalAmount += Number(totalPrice.slice(1));
            });
            console.log("Total: ", $scope.totalAmount);
        }



        $scope.payNow = function(obj) {
        	console.log(obj);

            if (!obj.name) {
                alert('please enter name');
                return;
            } else if (!obj.cardnumber) {
                alert('please enter Correct cardnumber');
                return;
            } else if (!obj.date) {
                alert('please enter date');
                return;
            } else if (!obj.cvv) {
                alert('please enter Correct cvv');
                return;
            } else if (!obj.address1) {
                alert('please enter Address ');
                return;
            } else if (!obj.address2) {
                alert('please fill the address');
                return;
            }
            var pay = localStorage.getItem($rootScope.profileInformation.email);
            if (pay) {
                $scope.paymentInformation = JSON.parse(pay);
                obj.totalAmount = "$"+$scope.totalAmount;
                $scope.paymentInformation.push(obj);
                localStorage.setItem($rootScope.profileInformation.email, JSON.stringify($scope.paymentInformation));
            } else {
                $scope.paymentInformation = [];
                obj.totalAmount = "$"+$scope.totalAmount;
                $scope.paymentInformation.push(obj);
                localStorage.setItem($rootScope.profileInformation.email, JSON.stringify($scope.paymentInformation));
            }
            var confirmPopup = $ionicPopup.confirm({
                title: 'paid successfully',
                template: 'Are you sure you want to see your payment details?'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    $state.go('app.payment');
                    $rootScope.cartDetails =[];
                } else {
                    console.log('You are not sure');
                }
            });

        }
    });
