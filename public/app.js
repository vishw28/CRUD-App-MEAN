/**
 * Created by Vishw on 1/7/2017.
 */

(function () {
    'use strict';

    var app = angular.module('myApp',['ngRoute']);

    app.config('$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: 'index.html',
              controller: 'MainController'
            })
            .otherwise({redirectTo:'/'});
    });

})();