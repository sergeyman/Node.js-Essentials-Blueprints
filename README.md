# Node.JS-Essetials-Bluprints
Node.JS Investigations based on [Packt Node.JS 6.x Blueprints]
1) Installing
>node -v
>npm -v
>npm install -g yo
>npm install -g express, express-generator
>> express --view=ejs --css sass <--git ? >
>npm init
* package.json
  "scripts": {
    "start": "node app.js"    //nodemon
  }, ...

>npm install

>$ set DEBUG=myapp:* & npm start      //Windows
 Open your browser at http://localhost:3000.

2) Changing the application structure
  /root/server
        /config
          config.js
        /routes
        /views
          /partials
            index.ejs
            errors.ejs
            
          /pages
            stylesheet.ejs
            javascript.ejs
            header.ejs
            footer.ejs
            login.ejs
            signup.ejs
            profile.ejs     // */routes/indes.js
        
 * app.js
 * /routes/index.js
 
 > npm install connect-flash connect-mongo express-session gravatar passport passport-local -save
 &* app.js
 
        
