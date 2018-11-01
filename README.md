# caio resende
This repository was created to host a blog type website using keystoneJS

# Running the app
This section does a step by step on how to run the app. There is already a deployed version here: https://caioresende.com. ***Have fun!***
## Dependencies
  1. We are using [KeystoneJS](https://keystonejs.com/) to manage data
  2. To create the HTML templates, I'm using [Jade](http://jade-lang.com/)
  3. Using SASS for styling
## Local Environment
To run locally, using gulp and node, follow the steps after opening terminal:
  1. Clone this repository.
  2. Make sure you have [NodeJS](https://nodejs.org/en/) installed on your machine.
  3. Run `npm install` to get all dependencies like AngularJS, Angular Material and so many others.
## Deploy using Heroku
To deploy the app, using heorku, follow the steps after opening terminal:
  1. Clone this repository.
  2. Make sure you have [NodeJS](https://nodejs.org/en/) installed on your machine. I used version 6x.
  3. Make sure you have a [Heroku](https://heroku.com) account, installed CLI, and you're logged in. To login, run `heroku login`.
  4. Run `heroku create` to generate an app.
  5. We need to add MongoDB to our app. Add it through `heroku addons:create mongolab`.
  7. Run `git push heroku master`to deploy the app on heroku platform. Open the link that appears at the end of the deploy.
## Understanding the structure
  1. Models: store all the data structure
  2. Public: store all files related to the frontend
  3. Routes: store all files related to the api
  4. Templates: all HTML/Jade templates
  5. Updates: any update related to the data/model
  6. web.js: starting point for the application