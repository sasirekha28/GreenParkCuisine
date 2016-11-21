(function() {
    'use strict';
  
})();

var npApp = angular.module('app', ['ui.router',
    'npApp.controllers',
    'npApp.providers',
    'npApp.services',
    'npApp.filters',
    'npApp.constant',
    'ngStorage',
    'ionic',
    'ngCordova',
   'ngCordovaOauth',
   'uiGmapgoogle-maps'

]);

angular.module('npApp.providers', []);

angular.module('npApp.controllers', ['uiGmapgoogle-maps']);


angular.module('npApp.factories', []);

angular.module('npApp.directives', []);

angular.module('npApp.services', []);

angular.module('npApp.filters', []);

angular.module('npApp.constant', []);
