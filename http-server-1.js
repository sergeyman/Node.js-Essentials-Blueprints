var chalk = require("chalk");
var Router = require( 'router' );

/*
var http = require('http');

var server = new http.Server();		//EventEmitter (Кантор)

server.listen(1337, '127.0.0.1');

var counter = 0;

server.on('request', function(req, res) {
	res.end("Hello world! " + ++counter);
});
*/

//https://nodejs.org/en/docs/guides/getting-started-guide/
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var counter = 10;
/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('ABC Hello World\n ' + ++counter);
});
*/

function requestHandler( request, responce ) {
	var message,
	status = 200;
	
	counter += 1;
	
	//adding simple routing
	switch( request.url ) {
		case '/counter':
			message = counter.toString();
			break;
		case '/hello':
			message = 'World\n';
			break;
		default:
			status = 404;
			message = 'Not Found';
			break;
	}
	
	responce.writeHead( 201, {
		'Content-Type': 'text/plain'
	});
	
	//Браузер делает 2 запроса (на /favicon.ico) при обновлении страницы (в текущем контексте в Chrome)
	//message = '\n\nVisitor\'s counter: ' + counter + ', path: ' + request.url;
	message = '\n\nVisitor\'s counter: ' + counter; 
	
	//console.log( message );
	console.log( request.url, chalk.green('[' + status + ']'), message );
	
	responce.end( message );
}
var server = http.createServer(requestHandler);

//using router2
/*
var server = http.createServer( function( request, responce ) {
	
	//router.<HTTP method>( <path>, [ ... <handler> ] )
	router( request, responce, function( error ) {
		if( !error ) {
			responce.writeHead( 404 );
		} else {
			//Handle errors
			console.log( error.message, error.stack );
			responce.writeHead( 400 );
		}
		responce.end( '\n' );
	});
}):
*/

server.listen(port, hostname, () => {
  console.log(chalk.green(`Server running at http://${hostname}:${port}/`));
});