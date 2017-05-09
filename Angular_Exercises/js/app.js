(function() {

    "use strict";

    var app = angular.module('BookStoreApp', ['ui.router']);

    app.controller('BooksController', function($scope, $http) {
        $http.get('data/data.json')
            .then(function(res) {
                $scope.booksData = res.data;
            });
    });

    app.controller('BookSheetController', function() {

        this.bookId = '';
        this.title = '';
        this.author = '';
        this.editorial = '';
        this.description = '';
        this.img = '';

        this.saveData = function(bookId,title,author,editorial,description,img) {
            this.bookId = bookId;
            this.title = title;
            this.author = author;
            this.editorial = editorial;
            this.description = description;
            this.img = img;
        }
    });

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/list');

        $stateProvider
            .state('home', {
                url: '/list',
                templateUrl: 'list.html',
                controller: 'BooksController'
            })
            .state('bookTab', {
                url: '/book/{id}',
                templateUrl: 'tab.html',
                controller: 'BooksController'
            });
    });    

})();
