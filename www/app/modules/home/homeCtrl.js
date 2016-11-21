angular.module('npApp.controllers')
    .controller("homeCtrl", function($scope, $state, $rootScope)/*,$ionicSideMenuDelegate)*/ {

/*  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
*/
$scope.wrap = function() {
  $state.go('app.wrap');
}
$scope.salads = function() {
  $state.go('app.salads');
}

$scope.desserts = function() {
  $state.go('app.desserts');
}
$scope.beverage = function() {
  $state.go('app.beverage');
}
$scope.login = function() {
  $state.go('app.login');
}



// Called to navigate to the main app
/*  
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  */ 

    });

    
