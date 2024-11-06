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
create a file and write ....
  exports.myDateTime = function () {
    return new Date().toString();
}

the exports keyword makes the properties and method available outside the module file




    

