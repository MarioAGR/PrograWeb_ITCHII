/*Modulo*/

/*Closure, funcion que se manda a llamar asi mism*/
(function() {
    var app = angular.module('storeModule', []);

    var gem = {
        name: 'Safiro',
        price: 100,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        canPurchase: false,
        soldOut: true
    }

    var gems = [{
        name: 'Safiro',
        price: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        images: [{
            full: './public/img/img-01.png',
            thumb: './public/img/img-04.png'
        }],
        reviews: [{
            stars: 3,
            body: "asdasdad",
            author: "das@adasd.com"
        }, {
            stars: 3,
            body: "asdasdad",
            author: "das@adasd.com"
        }]
    }, {
        name: 'Ruby',
        price: 10,
        description: 'Nihil molestiae reprehenderit excepturi qui, eum facilis tempora, quaerat cumque, necessitatibus autem doloribus modi amet, asperiores!',
        images: [{
            full: './public/img/img-02.png',
            thumb: './public/img/img-05.png'
        }],
        reviews: [{
            stars: 3,
            body: "asdasdad",
            author: "das@adasd.com"
        }, {
            stars: 3,
            body: "asdasdad",
            author: "das@adasd.com"
        }]
    }, {
        name: 'Esmeralda',
        price: 100,
        description: 'Deserunt ducimus molestiae, eius fugit asperiores.',
        images: [{
            full: './public/img/img-03.png',
            thumb: './public/img/img-06.png'
        }],
        reviews: [{
            stars: 3,
            body: "asdasdad",
            author: "das@adasd.com",
        }, {
            stars: 3,
            body: "asdasdad",
            author: "das@adasd.com"
        }]
    }]

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('PanelController', function() {
        this.tab = 3;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        }

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
            /*Con 3 iguales siempre se compara el elemtento*/
        }

    });

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        }
    });

})();