# NODEJS
 Node is an open soruce server environment, and it uses javascript on the server

 A comon task for a web server can be to open a file on the server and return the cont ent to the client

 First it sends task to the computer's file system, Ready to handle the next request, when the file system has opened and read the file, the server returns the content to the client

 it basically eliminates the waiting and simply continues with the next request.

 Node.js can create, open, read, write, delete, and close files on the server. 
 it can collect form data, and also delete, add or modify data in your database

 # Module in Node.Js
 Modules in nodejs are similar to that of libraries i javascript
 They are like a set of function you want to include in your application

 # Built-in Modules
    Nodejs has a set of built in modules which you can use with out any further installation
    Some of the built in modules are: 
    assert: Provides a set of assertion tests
    buffer: Handle binary data.
    child_process: Runs child process
    cluster: split a single node process into multiple process
    fs: to handle file system
    http: make nodejs act as an http server to handle http request,
    https: make nodejs act as an https server to handle https request
    net: create servers and client
    path: to handle file path
    os: provides info about os
    stream: handle streaming data

# Add Modules
To include modules in your application, you can use the require() function with the name of the modile
eg  var http = require('http') 
this gives the application access to http module.

# creating a Module
A module is a file that exports a function or a set of functions that can be used by other files or modules
eg
create a file and write .... lets say you want to creat a time and date module

  exports.myDateTime = function () {
    return new Date().toString();
}

the exports keyword makes the properties and method available outside the module file.

# The Built-in HTTP Module
this allows nodejs to transfere data over the hyperTextTransferProtocol
to include we use :   require('http') 

# Nodejs as a web server 
The http module can create an http server that listens to server ports and gives a response back to the client

You use the createServer() method to create an http server

Ex: 
var http = require('http')

http.createServer(function(req, res) { // create a server object
    res.write('Hello world') // write a response to the client
    res.end(); // end the response
    
}).listen(4000) // the server object listens on port 4000


the function passed in to the http.createServer() wil be executed when someone tries to access the computer on port 4000

# HTTP Header 
If the response fro the http server is supposed to be displayed as HTML. you should include an HTTP header with the correct content type

res.writeHead(200, {'Content-Type': 'text/html'})

# DAY TWO *******************

#  File System in Nodejs
The file system module in Nodejs is used to interact with the file system of the computer. 
To include the File System module, use the 'require()' method.
 Eg 
 var fs = require('fs')

The Common use for the File System module are: 

Read files
Create files
Update files
Delete files
Rename files

#**** Read Files
The fs.readFile() method is used to read files on your computer.
Eg 

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
 
  fs.readFile('home.html', function(err, data) {      //Open a file on the server and return its content:
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

}).listen(8080);

where home.html is an external file

# Create Files
The File System module has methods for creating new files:

fs.appendFile()
fs.open()
fs.writeFile()
The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

******  Creating a new file using the appendFile() method:

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

*******  Creating a new, empty file using the open() method:

var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});


********  The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created.

******  Creating a new file using the writeFile() method:

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


#   Update Files
The File System module has methods for updating files:

****  fs.appendFile()
*****  fs.writeFile()
The fs.appendFile() method appends the specified content at the end of the specified file:
Eg

var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});


******* The fs.writeFile() method replaces the specified file and content:

Example
Replace the content of the file "mynewfile3.txt":

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});


******* Delete Files
To delete a file with the File System module,  use the fs.unlink() method.

The fs.unlink() method deletes the specified file:

Example
Delete "mynewfile2.txt":

var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});



****** Rename Files
To rename a file with the File System module,  use the fs.rename() method.

The fs.rename() method renames the specified file:

Example
Rename "mynewfile1.txt" to "myrenamedfile.txt":

var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

# *********  The Built-in URL Module
The URL module splits up a web address into readable parts.

To include the URL module, use the require() method:

var url = require('url');
Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:

Split a web address into readable parts:

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'

Node.js File Server
Now we know how to parse the query string, and in the previous chapter we learned how to make Node.js behave as a file server. Let us combine the two, and serve the file requested by the client.

Create two html files and save them in the same folder as your node.js files.

summer.html

<!DOCTYPE html>
<html>
<body>
<h1>Summer</h1>
<p>I love the sun!</p>
</body>
</html>
winter.html

<!DOCTYPE html>
<html>
<body>
<h1>Winter</h1>
<p>I love the snow!</p>
</body>
</html>

Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

demo_fileserver.js:

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);





    

