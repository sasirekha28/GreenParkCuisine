angular.module('npApp.controllers')
    .controller("beverageCtrl", function($scope, $state, $ionicModal, $rootScope, $ionicPopup) {

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
       
    	$scope.beverages = [

    	{

			productName:'Espresso Macchiato',
			productDescription:'With Rich in Coco',
			productQty:'1',
			productImg:"assets/img/espressomacchiato.jpg",
            productPrice:'$10'

    	},
    	{

			productName:'Latte Macchiato',
			productDescription:'With Rich in Cream',
			productQty:'1',
			productImg:"assets/img/macchiato.png",
            productPrice:'$12'

    	},
    	{

			productName:'Espresso',
			productDescription:'With Rich in CocoBeans',
			productQty:'1',
			productImg:"assets/img/espresso.jpg",
            productPrice:'$11'

    	},
    	{

			productName:'Cappucino',
			productDescription:'With Caramal Flavoured',
			productQty:'1',
			productImg:"assets/img/cappucino.jpg",
            productPrice:'$10'

    	},
    	{

			productName:'Caffe Mocha',
			productDescription:'With Rich in CocoBeans',
			productQty:'1',
			productImg:"assets/img/caffemocha.jpg",
            productPrice:'$16'

    	},
    	{

			productName:'Caffe Americano',
			productDescription:'With Rich in CocoBeans',
			productQty:'1',
			productImg:"assets/img/caffeamericano.jpg",
            productPrice:'$18'

    	},
    	{

			productName:'Caramel Brulé Latte',
			productDescription:'With Rich in Caramel',
			productQty:'1',
			productImg:"assets/img/caffecaramel.jpg",
            productPrice:'$13'

    	},
    	{

			productName:'Caramel Macchiato',
			productDescription:'With Rich in Caramel',
			productQty:'1',
			productImg:"assets/img/caramelmacchiato.jpg",
            productPrice:'$12'

    	},
    	{

			productName:'Chestnut Praline Latte',
			productDescription:'With Rich in Chestnut',
			productQty:'1',
			productImg:"assets/img/chestnut.png",
            productPrice:'$12'

    	},
    	{

			productName:'Cinnamon Dolce Latte',
			productDescription:'With Rich in Choco Crust',
			productQty:'1',
			productImg:"assets/img/cinnamondolce.jpg",
            productPrice:'$13'

    	}


    	]



        $scope.coldbeverages = [

        {

            productName:'Iced Americano',
            productDescription:'With Rich in Coco',
           productQty:'1',
            productImg:"assets/img/americano.jpg",
            productPrice:'$12'

        },
        
        {

            productName:'Lime Iced Espresso',
            productDescription:'With Rich in CocoBeans',
            productQty:'1',
            productImg:"assets/img/limeicedespresso.png",
            productPrice:'$10'

        },
        {

            productName:'Iced Mocha Latte',
            productDescription:'With Rich in Cream',
            productQty:'1',
            productImg:"assets/img/mochaiced.jpeg",
            productPrice:'$10'

        },
        {

            productName:'Iced Cappucino',
            productDescription:'With Rich in CocoBeans',
            productQty:'1',
            productImg:"assets/img/cappuccinoiced.jpg",
            productPrice:'$9'

        },
        {

            productName:'Iced Caramel Latte',
            productDescription:'With Rich in Caramel',
            productQty:'1',
            productImg:"assets/img/carameliced.jpg",
            productPrice:'$12'

        },
        {

            productName:'Iced Choco Latte',
            productDescription:'With Rich in Choco',
           productQty:'1',
            productImg:"assets/img/chocoiced.jpg",
            productPrice:'$13'

        },
        {

            productName:'Iced Vannila Latte',
            productDescription:'With Rich in CocoBeans',
            productQty:'1',
            productImg:"assets/img/vanillaiced.jpg",
            productPrice:'$12'

        },
        {

            productName:'Iced Caramel Macchiato',
            productDescription:'With Rich in Caramel',
           productQty:'1',
            productImg:"assets/img/chocoiced.jpg",
            productPrice:'$10'

        },
        {

            productName:'Iced PeanutButter Latte',
            productDescription:'With Rich in Peanuts',
           productQty:'1',
            productImg:"assets/img/peanutcoffee.jpg",
            productPrice:'$12'

        },
        {

            productName:'Iced Cinnamon Latte',
            productDescription:'With Rich in Choco crust',
           productQty:'1',
            productImg:"assets/img/cinnamoniced.jpg",
            productPrice:'$10'

        }

        
        

        ]
          
    });