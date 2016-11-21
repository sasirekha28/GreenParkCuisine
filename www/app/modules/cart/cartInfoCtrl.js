angular.module('npApp.controllers')
    .controller("cartInfoCtrl", function($scope, $state, $rootScope, $ionicPopup) {
        $scope.back2home = function() {

            $state.go('app.home');
        }

$scope.getSubPrice = function() {
    
            $scope.SubtotalAmount = 0;
            angular.forEach($rootScope.cartDetails, function(value, key) {
              var test1 =value.productPrice;
              var test2 =value.productQty;
                $scope.SubtotalAmount = Number(test1.slice(1)) * Number(test2);
            });
            console.log("SubTotal: ", $scope.SubtotalAmount);
            return $scope.SubtotalAmount;
        }
 


        $scope.increaseItemCount = function(data) {
           
            data.productQty++;
            

           if (data.productQty >1)
            {
            var productCost = data.productPrice;
            data.subTotal = "$"+(data.productQty * Number(productCost.slice(1))); 
            console.log(data.productPrice);
           }
           if(data.productQty >10){


            var alertPopup = $ionicPopup.alert({
                    title: 'Hurray !',
                    template: 'Thank you for your Bulk order.'
                });
                alertPopup.then(function(res) {
                    console.log('Thank you');
                });
           }

        };
        $scope.decreaseItemCount = function(data) {
            
            if (data.productQty > 1) {
                data.productQty--;  
                var productCost = data.productPrice;
                data.subTotal = "$"+(data.productQty * Number(productCost.slice(1))); 

            } else if (data.productQty > 0) {
          
                var alertPopup = $ionicPopup.alert({
                    title: 'Oops !',
                    template: 'You must Select Atleast One quantity'
                });
                alertPopup.then(function(res) {
                    console.log('Thank you');
                });
            }

        };



        $scope.removeProduct = function(index) {
            $rootScope.cartDetails.splice(index, 1);
        }

        $scope.checkout = function() {
            if ($rootScope.isLogin) {
                $state.go('app.checkout');
            } else {
                $rootScope.isCheckout = true;
                $state.go('app.login');
            }
        }
    });
