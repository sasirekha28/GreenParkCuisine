angular.module('npApp.controllers')
    .controller("dessertsCtrl", function($scope, $state, $ionicModal, $rootScope, $ionicPopup) {
        
       
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
    $scope.cartalert=function(obj){
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
       

        		$scope.creamcakes = [

        		{
        			productName:'RedVelvet Cake',
        			productDescription:'With Fresh Creams',
        			productQty:'1',
        			productImg:"assets/img/redvelvet.jpg",
                    productPrice:'$12'

        		},
        		{
        			productName:'Blackforest Cake',
        			productDescription:'With Choco Dust',
        			productQty:'1',
        			productImg:"assets/img/blackforest.jpg",
                    productPrice:'$13'
        		},
        		{
        			productName:'Raspberry Cake',
        			productDescription:'With Choco Chips',
        			productQty:'1',
        			productImg:"assets/img/raspberry.jpg",
                    productPrice:'$14'
        		},
        		{
        			productName:'7 Layers Rainbow Cake',
        			productDescription:'With Fresh Creams',
        			productQty:'1',
        			productImg:"assets/img/7layers.jpg",
                    productPrice:'$15'
        		},
        		{
        			productName:'BlueBerry Slice Cake',
        			productDescription:'With Berry Toppings',
        			productQty:'1',
        			productImg:"assets/img/bluecake.jpg",
                    productPrice:'$12'

        		},
        		{
        			productName:'Strawberry Choco Cake ',
        			productDescription:'With Choco Chips',
        			productQty:'1',
        			productImg:"assets/img/chocopie.jpg",
                    productPrice:'$12'

        		},
        		{
        			productName:'Raspberry  cake',
        		  productDescription:'With Berry Toppings',
        			productQty:'1',
        			productImg:"assets/img/5layer.jpg",
                    productPrice:'$13'
        		},
        		{
        			productName:'Molten Choco Lava Cake',
        			productDescription:'With Choco Chips',
        			productQty:'1',
        			productImg:"assets/img/lavacake.jpg",
                    productPrice:'$20'
        		},
        		{
        			productName:'Chocolate Cake',
        			productDescription:'With Choco Chips',
        			productQty:'1',
        			productImg:"assets/img/chococake.jpg",
                    productPrice:'$12'
        		},
        		{
        			productName:'Lemon Velvet Cake',
        			productDescription:'With Choco Chips',
        			productQty:'1',
        			productImg:"assets/img/lemonvelvet.jpg",
                    productPrice:'$13'
        		}


        		]

                $scope.cupcakes = [
{
                    productName:'RedVelvet CupCake',
                    productDescription:'With Fresh Creams',
                    productQty:'1',
                    productImg:"assets/img/redcupcake.jpg",
                    productPrice:'$12'

                },
                {
                    productName:'PepperMint CupCake',
                    productDescription:'With Choco Dust',
                    productQty:'1',
                    productImg:"assets/img/pepperminttwist.jpg",
                    productPrice:'$13'
                },
                {
                    productName:'Strawberry CupCake',
                    productDescription:'With Choco Chips',
                   productQty:'1',
                    productImg:"assets/img/cupcake.jpg",
                    productPrice:'$12'
                },
                {
                    productName:' Rainbow CupCake',
                    productDescription:'With Fresh Creams',
                   productQty:'1',
                    productImg:"assets/img/rainbowcup.jpg",
                    productPrice:'$13'
                },
                {
                    productName:'ChocoTruffle CupCake',
                    productDescription:'With Berry Toppings',
                    productQty:'1',
                    productImg:"assets/img/chocotruffle.jpg",
                    productPrice:'$15'

                },
                {
                    productName:'Chocolate CupCake ',
                    productDescription:'With Choco Chips',
                   productQty:'1',
                    productImg:"assets/img/chococupcake.jpg",
                    productPrice:'$12'

                },
                {
                    productName:'Blueberry Cupcake',
                  productDescription:'With Berry Toppings',
                    productQty:'1',
                    productImg:"assets/img/blueberrycup.jpg",
                    productPrice:'$14'
                },
                {
                    productName:'Banana Split CupCake',
                    productDescription:'With Choco Chips',
                    productQty:'1',
                    productImg:"assets/img/bananasplit.jpg",
                    productPrice:'$14'
                },
                {
                    productName:'Double Vanilla CupCake',
                    productDescription:'With Choco Chips',
                   productQty:'1',
                    productImg:"assets/img/vanillacup.jpg",
                    productPrice:'$13'
                },
                {
                    productName:'Lemon CupCake',
                    productDescription:'With Choco Chips',
                   productQty:'1',
                    productImg:"assets/img/raspberrycup.jpg",
                    productPrice:'$14'
                }

                ]



    });
