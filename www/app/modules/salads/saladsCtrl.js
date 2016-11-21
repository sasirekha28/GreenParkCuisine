angular.module('npApp.controllers')
    .controller("saladsCtrl", function($scope, $state, $ionicModal, $rootScope, $ionicPopup) {
        $scope.counter1 = 0;
        $scope.decrement = function() {
            $scope.counter1--;
        };

        $scope.increaseItemCount = function(products) {
            products.productQty++;
        };
        $scope.decreaseItemCount = function(products) {
            if (products.productQty > 1) {
                products.productQty--;
            } else if (products.productQty > 0) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Oops !',
                    template: 'You must Select Atleast One quantity'
                });
                alertPopup.then(function(res) {
                    console.log('Thank you');
                });
            }
        };


       
        $scope.add2cart=function(obj){
             if($rootScope.cartDetails.length !=0){
                var currentProduct = _.findWhere($rootScope.cartDetails, { productName: obj.productName });
                if(currentProduct){
                   obj.productQty++;
                var productCost = currentProduct.productPrice;
                obj.subTotal = "$"+(obj.productQty * Number(productCost.slice(1)));  
            }else{
                obj.subTotal = obj.productPrice;
                 $rootScope.cartDetails.push(obj);
            }
                
            }else{
                obj.subTotal = obj.productPrice;
                $rootScope.cartDetails.push(obj);
            }
           
           
            
            console.log($rootScope.cartDetails);

        }
        $scope.cartalert = function(obj) {
            var alertPopup = $ionicPopup.alert({
                title: 'Thank You!',
                template: 'The Selected Product has been added to Cart'
            });
            alertPopup.then(function(res) {
                console.log('Thank you');
            });
        }

        /* product descrption quick view */
        $scope.test = function(obj) {
            console.log(obj);
            $scope.productDetails = obj;
        }



        $scope.contacts = [
            { name: 'Gordon Freeman' },
            { name: 'Barney Calhoun' },
            { name: 'Lamarr the Headcrab' },
        ];

        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.createContact = function(u) {
            $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
            $scope.modal.hide();
        };


        $scope.vegsalads = [

            {

                productName: 'Fruit Salad',
                productDescription: 'With Mayonise',
                productQty: '1',
                productImg: "assets/img/fruitsalad.jpg",
                productPrice: '$20'

            }, {

                productName: 'Greek Veg Salad',
                productDescription: 'With Rich in Olives',
                productQty: '1',
                productImg: "assets/img/greekveg.jpg",
                productPrice: '$22'


            }, {

                productName: 'Mayonise Pasta Salad',
                productDescription: 'With Chease',
                productQty: '1',
                productImg: "assets/img/mayopastasalad.jpg",
                productPrice: '$23'


            }, {

                productName: 'Mixed Vegetable Salad',
                productDescription: 'With Capsicum ',
                productQty: '1',
                productImg: "assets/img/vegsalads1.jpg",
                productPrice: '$20'


            }, {

                productName: 'Mixed Veg Rice Salad',
                productDescription: 'With Mixed Vegitables',
                productQty: '1',
                productImg: "assets/img/vegsalads2.jpg",
                productPrice: '$24'


            }, {

                productName: 'Paneer Tikka  Salad',
                productDescription: 'With Mixed Vegitables',
                productQty: '1',
                productImg: "assets/img/panneersalad.jpg",
                productPrice: '$28'


            },

            {

                productName: 'Mushroom Pasta Salad',
                productDescription: 'With Mixed Vegitables',
                productQty: '1',
                productImg: "assets/img/mushsalad.jpeg",
                productPrice: '$26'


            },

            {

                productName: 'BabyCorn Pasta Salad',
                productDescription: 'With Mixed Vegitables',
                productQty: '1',
                productImg: "assets/img/babycornsalad.jpg",
                productPrice: '$27'


            },

            {

                productName: 'Strawberry Feta Salad',
                productDescription: 'With Mixed Vegitables',
                productQty: '1',
                productImg: "assets/img/strawsalad.jpg",
                productPrice: '$20'


            },

            {

                productName: 'WaterMelon Feta Salad',
                productDescription: 'With Mint',
                productQty: '1',
                productImg: "assets/img/watersalad.jpg",
                productPrice: '$20'


            }



        ]


        $scope.nonvegsalads = [

            {

                productName: 'Seared Tuna Salad',
                productDescription: 'With Tofu , olive Toppings',
                productQty: '1',
                productImg: "assets/img/searedtunasalad.jpg",
                productPrice: '$33'

            }, {

                productName: 'Korean Kimichi Salad',
                productDescription: 'With Kimichi and Beef',
                productQty: '1',
                productImg: "assets/img/koreansalad.jpg",
                productPrice: '$46'


            }, {

                productName: 'Canned Fish Salad',
                productDescription: 'With mayonnaise',
                productQty: '1',
                productImg: "assets/img/mimosasalad.jpg",
                productPrice: '$45'


            }, {

                productName: 'Chinese Chicken Salad',
                productDescription: 'With Mixed Vegitables',
                productQty: '1',
                productImg: "assets/img/chinesechicken.jpg",
                productPrice: '$44'


            }, {

                productName: 'Crab Louie Salad',
                productDescription: 'With Mixed Vegitables',
                productQty: '1',
                productImg: "assets/img/crablouiesalad.jpg",
                productPrice: '$49'


            }, {

                productName: 'Asian Chicken Salad',
                productDescription: 'With Mixed Vegitables',
                productQty: '1',
                productImg: "assets/img/asianpulled.jpg",
                productPrice: '$48'


            },

            {

                productName: 'Larb Chicken Salad',
                productDescription: 'With Mixed Vegitables',
                productQty: '1',
                productImg: "assets/img/larbchicken.jpg",
                productPrice: '$36'


            },

            {

                productName: 'Mutton Keema Salad',
                productDescription: 'With Mixed Vegitables',
                productQty: '1',
                productImg: "assets/img/muttonksalad.jpg",
                productPrice: '$37'


            },

            {

                productName: 'Chinese Chicken Salad',
                productDescription: 'With Mixed Vegitables',
                productQty: '1',
                productImg: "assets/img/chinesechicken.jpg",
                productPrice: '$30'


            },

            {

                productName: 'Spicy Chicken Salad',
                productDescription: 'With Mixed Vegitables',
                productQty: '1',
                productImg: "assets/img/chicksalad.jpg",
                productPrice: '$30'


            }

        ]
    });
