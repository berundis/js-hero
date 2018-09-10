# Keyboard Hero

## About 
This web-app is a music rhythm game that has a backend on Rails and a frontend in JavaScript with P5.js library. It includes 3 songs: 
* Fell In Love With A Girl - White Stripes 
* Star Slight - At the Dive-In
* When I'm Small - Phantogram

## Start the App 
Make sure you're in the backend directory and run the following commands in your terminal 
```
bundle install 
rails db:migrate RAILS_ENV=development
rails db:seed 
rails s
```
Then on the frontend directory open the index.html file in your web browser. 

## ScreenShots 
Songs Menu
![Set List](https://i.imgur.com/2BPVOla.png)

GamePlay
![Game Play](https://i.imgur.com/N5ctoWp.png)

High Scores 
![High Scores](https://i.imgur.com/QWdEvS6.png)