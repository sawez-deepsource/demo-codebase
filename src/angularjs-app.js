// angularjs-app.js — AngularJS (v1) rule violations
// eslint-plugin-angular targets Angular 1.x patterns

// Simulate angular module
var angular = { module: function(name) { return { controller: function() { return this; }, service: function() { return this; }, factory: function() { return this; }, directive: function() { return this; }, filter: function() { return this; } }; } };

// JS-0520: angular/controller-as — not using controllerAs syntax
angular.module("app").controller("MainCtrl", function ($scope) {
  $scope.name = "World";
});

// JS-0522: angular/di-unused — injected dependency not used
angular.module("app").controller("OtherCtrl", function ($scope, $http, $timeout) {
  $scope.data = "loaded";
});

// JS-0555: angular/document-service — using document directly instead of $document
angular.module("app").controller("DomCtrl", function ($scope) {
  var el = document.getElementById("main");
  $scope.element = el;
});

// JS-0569: angular/window-service — using window directly instead of $window
angular.module("app").controller("WinCtrl", function ($scope) {
  $scope.width = window.innerWidth;
});

export {};
