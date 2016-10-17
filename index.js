//Callback functions
    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
    };
    var success = function (data) {
        console.log('Data [%s]', data);
    };

    var Twitter = require('twitter-js-client').Twitter;

    //Get this data from your twitter apps dashboard
    var config = {
        "consumerKey": "3balG7SyPNgXuXgIC2uf5RMKx",
        "consumerSecret": "ANjsOeZ5E0ugaYITm4CXcJR1SMHHN960aexOV6TEqlyAO2KJF1",
        "accessToken": "XXX",
        "accessTokenSecret": "XXX",
        "callBackUrl": "XXX"
    }

    var twitter = new Twitter(config);

    

    //
    // Get 10 tweets containing the hashtag haiku
    //

    twitter.getSearch({'q':'#haiku','count': 10}, error, success);

    //
    // Get 10 popular tweets with a positive attitude about a movie that is not scary 
    //

    twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);