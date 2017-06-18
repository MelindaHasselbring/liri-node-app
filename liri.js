var Twitter = require('twitter');
var spotify = require('node-spotify-api');
var request = require('request');
var keys = require('./keys.js');


switch (process.argv[2]) {
    case 'my-tweets':
        var client = new Twitter({
            consumer_key: keys.twitterKeys.consumer_key,
            consumer_secret: keys.twitterKeys.consumer_secret,
            access_token_key: keys.twitterKeys.access_token_key,
            access_token_secret: keys.twitterKeys.access_token_secret
        });
        var params = {screen_name: 'jayhasselbring'};

        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (error) throw error;
            console.log(error);  // The errors.
            console.log(tweets);  // The favorites.
            console.log(response);  // Raw response object.
        });
        break;
    case 'spotify-this-song ':
        console.log(spotify);
        break;
    case 'movie-this':
        console.log('Movies');
        break;
    case 'do-what-it-says':
        console.log('Do what it says');
        break;
}