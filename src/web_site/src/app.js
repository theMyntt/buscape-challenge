var module = angular.module("BuscapeApplication", []);

module.controller("MainController", function ($scope) {
  this.product = {
    name: "Smartphone Apple iPhone 7 128GB",
    images: [
      "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb_600x600-PU98460_1.jpg",
      "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_2_c.jpg?v=2347575274",
      "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_3_c.jpg?v=318433138",
      "http://thumbs.buscape.com.br/celular-e-smartphone/smartphone-apple-iphone-7-128gb/__200x400-PU98460_4_c.jpg?v=33273730",
    ],
    selectedImage: 0,
    price: 3509.1,
    parcel: 10,
    parcelValue: 389.9,
  };

  $scope.helloWorld = "Hello World!";
});
