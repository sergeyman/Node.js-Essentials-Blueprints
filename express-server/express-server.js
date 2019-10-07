const express = require('express')
const app = express()
const port = 3081

// check express version
/*
var pkgInfo = require('./package.json');
console.log(pkgInfo.dependencies.express);
*/

//console.log("**Express Version: ", require('express/package').version);
console.log("**Express Version: ", require('express/package').version.substr(0)); // remove strange sign before the version number

//Basic Routing
app.get('/', (req, res) => res.send('Hello World!'))

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))