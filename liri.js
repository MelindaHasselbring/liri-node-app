var Twitter  = require('twitter');
var Spotify = require('node-spotify-api');
var Request = require('request');
var keys = require('./keys.js');

switch (process.argv[2]){
    case 'my-tweets':
        var client = new Twitter ({
            consumer_key: keys.twitterKeys.consumer_key,
            consumer_secret: keys.twitterKeys.consumer_secret,
            access_token_key: keys.twitterKeys.access_token_key,
            access_token_secret: keys.twitterKeys.access_token_secret
        });
        var params = {screen_name: 'nodejs'};

        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
                var i = 0;
                console.log(tweets[i].user.name+' tweeted:');
                for (i = 0; i < 20; i++) {
                    console.log(i+1+' ) '+tweets[i].text+' on '+tweets[i].created_at);
                    console.log('------------------------------------------------------------------------------------');
                }
            }else{
                //Logging errors
                console.log(error);
            }
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