angular.module('npApp.controllers')
    .controller("appCtrl", function($scope, $state, $rootScope, $cordovaCamera ,$ionicModal) {

        $rootScope.cartDetails = [];

        $scope.loginpage = function(){
           $state.go('app.login');
        }

        $scope.back2home = function(){
          $state.go('app.home');
        }
        $scope.home = function() {
            $state.go('app.home');
        }


        $scope.profile = function() {
            $state.go('app.profile');
        }

        $scope.wrap = function() {
            $state.go('app.wrap');
        }

        $scope.salad = function() {
            $state.go('app.salads');
        }

        $scope.dessert = function() {
            $state.go('app.desserts');
        }
        $scope.beverage = function() {
            $state.go('app.beverage');
        }
        $scope.aboutus = function() {
            $state.go('app.aboutus');
        }
        $scope.contactus = function() {
            $state.go('app.contactus');
        }
        $scope.maps = function() {
            $state.go('app.map');
        }


       





       
        $scope.logout = function() 
        {
            $rootScope.isLogin = false;
                     $rootScope.profileInformation = null;
                       $rootScope.isCheckout = false;
                       $rootScope.cartDetails = [];
                        $rootScope.paymentHistory = null;
                      /*  $rootScope.cartDetails = null; */
                $state.go('app.login');
            }

            $scope.getProfileImage = function(){

                var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.profileImage = "data:image/jpeg;base64," + imageData;
      
    }, function(err) {
      // error
    });


            }
            /*
            AIzaSyDJQTgbwXMia4NEJIQNnuxUNykP5V0jtsg
            */
        $scope.cartdisplay = function() {
            $state.go('app.cart');
        }
    });
