(function() {
    var app = angular.module('BookStoreApp', ['ui.router']);

    app.controller('BooksController', function($scope, $http) {
        $http.get('data/data.json')
            .then(function(res) {
                $scope.booksData = res.data;
            });
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
                url: '/book',
                templateUrl: 'tab.html',
                controller: 'BookSheetController'
            });
    });

    app.controller('BookSheetController', function() {

        var bookPage = this;

        this.bookId = '';
        this.title = '';
        this.author = '';
        this.editorial = '';
        this.description = '';
        this.img = '';

        this.selectTab = function(setBookId) {
            this.bookId = setBookId;
        }

        this.saveData = function(bookId,title,author,editorial,description,img) {
            this.bookId = bookId;
            this.title = title;
            this.author = author;
            this.editorial = editorial;
            this.description = description;
            this.img = img;
        }
    });

})();
