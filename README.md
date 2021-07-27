# Description
This is a template for server side rendering with Vue.js. It does not use any frameworks to carry out server side rendering, instead uses a custom build

## ENV variables
ENV variables should be created in the config folder with the following naming convention **envname.env.js**

If no ENV files are present, the app will fallback to the example.env.dev file

The name of the file must correspond with the NODE_ENV that is set when the app is started

## Running the app
There are currently a number of default scripts that can be used depending on what environment you wish to utilize. 

### Dev mode
To run the project in dev mode run:

```
npm run dev
```

### production mode
To run in production mode run:

```
npm run production
```

### start script
This is for deployment purposes only

## Deployment
The app is currently set up to deploy to Heroku by default althoug any deployment setup can be used. to deploy to Heroku simply run:

```
heroku create
```

This will create the app and from here on you can just run:

```
npm run deploy
```