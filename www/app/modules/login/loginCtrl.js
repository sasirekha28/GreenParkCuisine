angular.module('npApp.controllers')
    .controller("loginCtrl", function($scope, $state,$rootScope) {


        

        $scope.userInformation = [];
        $rootScope.profileInformation =null;
        
        
        $scope.signIn = function(obj) 
        {
             

            $scope.logins = obj;
            console.log($scope.logins);
            $scope.retrieve = JSON.parse(localStorage.getItem("users"));
            console.log($scope.retrieve);

            var userObj = _.findWhere($scope.retrieve, { email: obj.email });

            console.log('isObj', userObj);
            if (userObj) {

                if (userObj.email == obj.email && userObj.password == obj.password) {
                    console.log('Success');


                    $rootScope.isLogin = true;
                     $rootScope.profileInformation = userObj;
                     if($rootScope.isCheckout)
                     {
                        $state.go('app.checkout');

                     }
                     else{
                        $state.go('app.home');
                     }
                    

                } else {
                    console.log('Sorry Try Again with Correct User Name');
                    alert('Username or password does not exist');
                }

            } else {
                alert('Username or Password does not exist');
            }


        };

        $scope.signUp = function(datas) {
           console.log(datas);
                if (!datas.email) 
                {
                    alert('please fill email required field');
                    return;
                } else if (!datas.password)
                 {
                    alert('please fill pswd required field');
                    return;
                } 
                else if (!datas.name)
                 {
                    alert('please fill name required field');
                    return;
                } 
                else if (!datas.phone)
                 {
                    alert('please fill phone required field');
                    return;

                }
          



            console.log(datas);
            if(localStorage.getItem("users")){

                $scope.retrieve = JSON.parse(localStorage.getItem("users"));
            }
            $scope.retrieve = JSON.parse(localStorage.getItem("users"));
            console.log($scope.retrieve);
            if ($scope.retrieve) {
                $scope.userInformation = $scope.retrieve;
                $scope.userInformation.push(datas);
                localStorage.setItem("users", JSON.stringify($scope.userInformation));
            $state.go('app.home');
            } else {
                $scope.userInformation =[];
                $scope.userInformation.push(datas);
                localStorage.setItem("users", JSON.stringify($scope.userInformation));
              
            }

 

           $state.go('app.home'); 
        };


      /*  $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();



        $scope.context = {
            isactive: true
        }

        $scope.user = {};

        $scope.home = function() {
            $state.go('app.home');
        }
*/


    });
