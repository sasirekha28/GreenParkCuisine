angular.module('npApp.controllers')
    .controller("wrapCtrl", function($scope, $state, $ionicModal, $rootScope ,$ionicPopup) {
       
        $scope.counter1 = 0;
        $scope.decrement = function() {
            $scope.counter1--;
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
/*

        $scope.Wraps = [{
            'id': '1',
            'name': "Veg Wraps",
            'Categories': [{
                'id': '22',
                'dep': "Fruit Salad"

            }, {
                'id': '31',
                'dep': "Cheese Salad"
            }]
        }, {
            'id': '2',
            'name': "Non Veg Wraps",
            'Categories': [{
                'id': '3',
                'dep': "Chicken Salad"
            }, {
                'id': '15',
                'dep': "Fish Salad"
            }]
        }];
    */

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

        $scope.vegwraps = [

            {
                productName: 'Veggie Carrot Wraps',
                productDescription: 'With Cabbage , Beetroot',
               productQty:'1',
                productImg: "assets/img/carrotwrap.jpg",
               productPrice:'$30',


            }, 
            {
                productName: 'Cheese Shawarma Wrap',
                productDescription: 'With Mixed Vegitables',
               productQty:'1',
                productImg: "assets/img/cheeseshawarma.jpg",
                  productPrice:'$33'

            },
             {
                productName: 'Lettuce Wrap',
                productDescription: 'With Spicy Capsicum ',
              productQty:'1',
                productImg: "assets/img/lettucewrap.jpg",
                  productPrice:'$50'
            },
             {
                productName: 'Mexican Veg  Wrap',
                productDescription: 'With Fresh Tomatoes',
                productQty:'1',
                productImg: "assets/img/mextortilla.jpg",
                  productPrice:'$30'

            }, 
            {
                productName: 'Veg Salad Wrap',
                productDescription: 'With spicy Tomatoes',
                productQty:'1',
                productImg: "assets/img/saladwrap.jpg",
                  productPrice:'$45'

            },
             {
                productName: 'Vietname Spring Roll ',
                productDescription: 'With Rich in Mayonise',
                productQty:'1',
                productImg: "assets/img/springroll.jpg",
                  productPrice:'$78'
            },
             {
                productName: 'Grilled Veggie Wrap',
                productDescription: 'With Chease ',
                productQty:'1',
                productImg: "assets/img/grilledvegwrap.jpg",
                  productPrice:'$70'

            }, 
            {
                productName: 'Mushroom Spinach Wrap',
                productDescription:'With Rich in Mayonise',
                productQty:'1',
                productImg: "assets/img/mushvegwrap.jpg",
                  productPrice:'$30'
            }, 
            {
                productName: 'Veg Paneer Wrap',
                productDescription: 'With Chease and Fresh Tomatoes',
                productQty:'1',
                productImg: "assets/img/panneervegwrap.jpg",
                  productPrice:'$60'
            }, 
            {
                productName: 'Pepper Mushroom Wrap',
                productDescription: 'With Rich in Mayonise',
               productQty:'1',
                productImg: "assets/img/mushvegwrap1.jpg",
                  productPrice:'$50'
            }


        ]

         $scope.nonvegwraps = [

            {
                productName: 'Grilled Lamb Shawarma',
                productDescription: 'With Olive and meatballs',
               productQty:'1',
                productImg: "assets/img/grilledlamb.jpg",
                  productPrice:'$80'

            },
             {
                productName: 'Italian Margherita Wrap',
                productDescription: 'With Mixed Vegitables',
                productQty:'1',
                productImg: "assets/img/margherita.jpg",
                  productPrice:'$50'
            }, 
            {
                productName: 'Chicken Shawarma',
                productDescription: 'With Spicy Cheese Toppings',
                productQty:'1',
                productImg: "assets/img/chickshawarma.jpg",
                  productPrice:'$20'
            }, 
            {
                productName: 'Barbeque Beef Wrap',
                productDescription: 'With Chease and Fresh Tomatoes',
               productQty:'1',
                productImg: "assets/img/bbqbeef.jpeg",
                  productPrice:'$60'
            },
            {
                productName: 'Mutton Keema Wrap',
                productDescription: 'With Chease and Fresh Tomatoes',
               productQty:'1',
                productImg: "assets/img/muttonkeema.jpg",
                  productPrice:'$45'

            },
             {
                productName: 'Grilled Chicken Wrap',
                productDescription: 'With Rich in Mayonise',
                productQty:'1',
                productImg: "assets/img/whitechicken.png",
                  productPrice:'$78'
            },
             {
                productName: 'Steak Wrap',
                productDescription: 'With Chease and Fresh Tomatoes',
                productQty:'1',
                productImg: "assets/img/steakwrap.jpg",
                  productPrice:'$70'

            }, 
            {
                productName: 'Asian Shrimp Wrap',
                productDescription:'With Rich in Mayonise',
                productQty:'1',
                productImg: "assets/img/asianshrimp.jpg",
                  productPrice:'$30'
            }, 
            {
                productName: 'Thai Chicken Wrap',
                productDescription: 'With Chease and Fresh Tomatoes',
                productQty:'1',
                productImg: "assets/img/thaichicken.jpg",
                  productPrice:'$60'
            }, 
            {
                productName: 'Thai Beef Wrap',
                productDescription: 'With Rich in Mayonise',
               productQty:'1',
                productImg: "assets/img/thaibeef.jpg",
                  productPrice:'$50'
            }
            ]


    });
