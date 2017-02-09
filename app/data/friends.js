/* You should save the data in your app as an array of objects. Each of these
 objects should roughly follow the format below.

 ``` { "name":"Ahmed",
 "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
 "scores":[ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ] } ```*/

var friends = [{
        name: "Rob",
        photo: "http://lorempixel.com/340/340/",
        scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1],
    },
    {
        name: "Mike",
        photo: "http://lorempixel.com/340/340/",
        scores: [4, 2, 2, 1, 1, 1, 1, 1, 5, 5],
    }
];

module.exports = friends;