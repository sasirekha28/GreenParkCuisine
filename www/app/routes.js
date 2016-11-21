angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, uiGmapGoogleMapApiProvider) {

        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDJQTgbwXMia4NEJIQNnuxUNykP5V0jtsg',
            v: '3.17',
            libraries: 'weather,geometry,visualization',
            language: 'en',
            sensor: 'false',
        })

        $urlRouterProvider.otherwise('/home');
        $stateProvider

            .state('app', {
                abstract: true,
                templateUrl: 'app/modules/main/app.html',
                controller: 'appCtrl'
            })
            .state('app.home', {
                url: '/home',
                templateUrl: 'app/modules/home/home.html',
                controller: 'homeCtrl'
            })
            .state('app.wrap', {
                url: '/wrap',
                templateUrl: 'app/modules/wrap/wrap.html',
                controller: 'wrapCtrl'
            })
            .state('app.salads', {
                url: '/salads',
                templateUrl: 'app/modules/salads/salads.html',
                controller: 'saladsCtrl'
            })
             .state('app.desserts', {
                url: '/desserts',
                templateUrl: 'app/modules/desserts/desserts.html',
                controller: 'dessertsCtrl'
            })
             .state('app.beverage', {
                url: '/beverage',
                templateUrl: 'app/modules/beverage/beverage.html',
                controller: 'beverageCtrl'
            })
              .state('app.login', {
                url: '/login',
                templateUrl: 'app/modules/login/login.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
              .state('app.checkout', {
                url: '/checkout',
                templateUrl: 'app/modules/checkout/checkout.html',
                controller: 'checkoutCtrl'
            })
            
              .state('app.map', {
            url: '/map',
            templateUrl: 'app/modules/map/map.html',
            controller: 'mapCtrl'
        })
                .state('app.profile', {
            url: '/profile',
            templateUrl: 'app/modules/profile/myprofile.html',
            controller: 'myprofileCtrl'
        })
          
              .state('app.payment', {
            url: '/payment',
            templateUrl: 'app/modules/payment/paymentlist.html',
            controller: 'paymentlistCtrl'
        })
            .state('app.contactus', {
            url: '/contactus',
            templateUrl: 'app/modules/contactus/contactus.html',
            controller: 'contactusCtrl'
        })
                .state('app.aboutus', {
            url: '/aboutus',
            templateUrl: 'app/modules/aboutus/aboutus.html',
            controller: 'aboutusCtrl'
        })
              .state('app.cart', {
            url: '/cart',
            templateUrl: 'app/modules/cart/cartInfo.html',
            controller: 'cartInfoCtrl'
        });



        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    });
