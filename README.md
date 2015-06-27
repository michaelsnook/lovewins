LoveWins
=====

See pictures of gay weddings everywhere! [LoveWins.in](http://LoveWins.in/)

###Installation
---

Fairly basic to set up your own instance of this application.

To set up your own version of this app, all you have to do is clone this repo:

```bash

$ git clone https://github.com/michaelsnook/lovewins.git && cd lovewins && npm install

```

###Configuration
---

For this application you need to get the API keys for Twitter [https://dev.twitter.com](https://dev.twitter.com) and Google Maps. These are then inserted into config.json . You can also specify the title you want your application to have in this file.

Below is the current config.json file. replace the values with your API keys and configurations.

```json
{
  "track": "WORDS,TO,TRACK",
  "pics_only": true,
  "retweets": false,
  "consumer_key": "CONSUMER_KEY",
  "consumer_secret": "CONSUMER_SECRET",
  "oauth_token": "OATH_TOKEN",
  "oauth_token_secret": "OAUTH_TOKEN_SECRET",
  "gmaps": "GMAPS_BROWSER_APPLICATION_KEY",
  "app_name": "APP_TITLE"
}
```

####Running the application
You should be able to run the application with the following:

```
$ foreman start
```

The app will run at localhost:5000. To run without Foreman, use `coffee app.coffee` and find the app on port 3000.

###Customization
---
####Tracking
To change what is being tracked by the application, replace "[WORDS_TO_TRACK]" in config.json with a comma seperated list of words to track. (e.g. "#LoveWins").

####Images
Markers are customizable by replacing 'fbomb.gif' and 'signPost.png' located in './public/img/'

'fbomb.gif' is the initail indicator.
'signpost.png' is the marker that drops after the gif animation and stays on the map.

####Retweets
If you set config.retweets to `true`, the app will attempt to retweet popular tweets every 10 minutes or so via your connected account.

####Pictures Only
If you set config.pics_only to `false`, the app will include all kinds of tweets in the stream, like the original [fbomb.co](http://fbomb.co).

###Deployment
---
If you want to deploy this app, I suggest Heroku, they have lots of docs to help you out:
node.js: https://devcenter.heroku.com/articles/getting-started-with-nodejs
websockets: https://devcenter.heroku.com/articles/node-websockets

###Contact
---

Let me know if you have any questions!

Michael
@michaelsnook
