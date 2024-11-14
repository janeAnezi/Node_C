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


# DAY Three *******************

# **** NodeJs Events ***
Objects in Node.js can fire events, like readStream objects fires events when opening and closing a file

var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
  console.log('The file is open');
});

*** Events Module ****
Nodejs has built-in  module called Events, where you can create, fire, and listen for your own events

To include the built-in events use require() method and to be able to access these properties and methods, create an EventEmitter object.

var events = require('events');
var eventEmitter = new events.EventEmitter();

*** You can assign event handlers to your own events with the EventEmitter object.

In the example below we have created a function that will be executed when a "scream" event is fired.

To fire an event, use the emit() method.

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

# ***** Node.js Upload Files *****
You can upload files to a server using Node.js. Below is an example of how to do it.

*** There is a very good module for working with file uploads, called "Formidable".

The Formidable module can be downloaded and installed using NPM.

*** npm install formidable ***
const formidable = require('formidable');

Now we are ready to make a web page in Node.js that lets the user upload files to your computer:

Step 1: Create an Upload Form
Create a Node.js file that writes an HTML form, with an upload field:

*** produce an HTML form ***
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}).listen(8080);

*** parse the uploaded file ***
we will have to include the Formidable module to be able to parse the uploaded file once it reaches the server.

When the file is uploaded and parsed, it gets placed on a temporary folder on your computer

var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);


*** save the file ***
When a file is successfully uploaded to the server, it is placed on a temporary folder.

The path to this directory can be found in the "files" object, passed as the third argument in the parse() method's callback function.

To move the file to the folder of your choice, use the File System module, and rename the file:

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);

# **** NodeJS Send Mail *****
To send an email using Node.js, you can use the Nodemailer module. 
The Nodemailer module makes it easy to send emails from your computer.

The Nodemailer module can be downloaded and installed using npm:
*** npm install nodemailer ***

After you have downloaded the Nodemailer module, you can include the module in any application

var nodemailer = require('nodemailer');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

To send HTML formatted text in your email, use the "html" property instead of the "text" property:


var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
}


# **** NodeJs Database ***
Node.js can be used in database applications.

One of the most popular databases is MySQL.

*** MySQL Database ***
To be able to experiment with the code examples, you should have MySQL installed on your computer.

*** SQL ***
SQL is a standard language for storing, manipulating and retrieving data in databases.

*** You can download a free MySQL database at https://www.mysql.com/downloads/.

Once you have MySQL up and running on your computer, you can access it by using Node.js.

To access a MySQL database with Node.js, you need a MySQL driver. This tutorial will use the "mysql" module, downloaded from NPM.

To download and install the "mysql" module, open the Command Terminal and execute the following:

*** npm install mysql ***

At this point, Node.js can use this module to manipulate the MySQL database:

var mysql = require('mysql');

# **** Create Connection ***
Start by creating a connection to the database.

Use the username and password from your MySQL database

open a file, eg. demo_db_connection.js

 var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

Now we can start querying the database using SQL statements.

*** Query a Database ***
To query a database, use the "query" method of the connection object.
Use SQL statements to read from (or write to) a MySQL database.

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});

The query method takes an sql statements as a parameter and returns the result.

***  MySQL ***
MySQL is a relational database management system (RDBMS) that stores data in structured tables with rows and columns. It uses SQL (Structured Query Language) for querying and managing data, making it suitable for applications that require complex transactions and data consistency.

*** Core Concepts ***
Tables: Data is stored in tables with rows and columns.
Schema: Each table follows a predefined schema, specifying the data types and constraints.
Joins: Supports joins between tables, useful for relational data.
Example
Creating a Table

sql

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  age INT
);
Inserting Data

sql

INSERT INTO users (name, email, age) VALUES ('Alice', 'alice@example.com', 30);
Querying Data

sql

SELECT * FROM users WHERE age > 25;
Updating Data

sql

UPDATE users SET age = 31 WHERE name = 'Alice';
Joining Tables

sql

SELECT orders.id, users.name, orders.total
FROM orders
JOIN users ON orders.user_id = users.id;



*** MongoDB ***
MongoDB is a NoSQL, document-oriented database that stores data in JSON-like BSON (Binary JSON) documents. It’s schema-less, which makes it flexible for handling large datasets with evolving structures, and it's well-suited for applications requiring fast iteration and scalability.

Core Concepts
Collections: Equivalent to tables in RDBMS but without a fixed schema.
Documents: Data is stored as documents in BSON format, similar to JSON.
Embedded Documents: Supports nesting of documents within documents, reducing the need for joins.
Example
Creating a Document

js

db.users.insertOne({
  name: "Alice",
  email: "alice@example.com",
  age: 30,
  address: { city: "New York", zip: "10001" }
});
Querying Data

js

db.users.find({ age: { $gt: 25 } });
Updating Data

js

db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 31 } }
);
Aggregating Data

js

db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$user_id", totalSpent: { $sum: "$amount" } } }
]);

MySQL is ideal for structured, transactional data with predefined schemas and complex joins.
MongoDB is flexible, schema-less, and optimized for hierarchical data structures and rapid application development.

*** Choose MySQL for consistency and relational data needs and MongoDB for scalability and flexibility with document-oriented data.

# Node.js Application with MySQL

First, install the mysql2 package to interact with MySQL:

*** npm install mysql2

Database Setup (MySQL)
Let's assume we have a MySQL database called mydb with a users table.

CREATE DATABASE mydb;
USE mydb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  age INT
);


Node.js Code (MySQL)
Here's a simple Node.js application that connects to MySQL, inserts a user, retrieves users, and updates a user’s information.


const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
});

// Connect to the database
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// Insert a new user
const insertUser = (name, email, age) => {
  connection.query(
    'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
    [name, email, age],
    (err, results) => {
      if (err) throw err;
      console.log('User inserted:', results.insertId);
    }
  );
};

// Get all users
const getUsers = () => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    console.log('Users:', results);
  });
};

// Update a user’s age
const updateUserAge = (id, age) => {
  connection.query(
    'UPDATE users SET age = ? WHERE id = ?',
    [age, id],
    (err, results) => {
      if (err) throw err;
      console.log('User updated:', results.message);
    }
  );
};

// Example usage
insertUser('Alice', 'alice@example.com', 30);
getUsers();
updateUserAge(1, 31);

# Node.js Application with MongoDB
First, install the mongodb package to interact with MongoDB:

*** npm install mongodb

Database Setup (MongoDB)
We’ll have to create a users collection in MongoDB where each document will represent a user. MongoDB doesn’t require a predefined schema, so we can start adding data directly.

Node.js Code (MongoDB)
Here's a simple Node.js application that connects to MongoDB, inserts a user document, retrieves users, and updates a user’s age.

js

const { MongoClient } = require('mongodb');

// MongoDB connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

// Connect to MongoDB
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  console.log('Connected to MongoDB database!');
  
  const db = client.db(dbName);
  const usersCollection = db.collection('users');

  // Insert a new user
  const insertUser = (user) => {
    usersCollection.insertOne(user, (err, result) => {
      if (err) throw err;
      console.log('User inserted with ID:', result.insertedId);
    });
  };

  // Get all users
  const getUsers = () => {
    usersCollection.find({}).toArray((err, users) => {
      if (err) throw err;
      console.log('Users:', users);
    });
  };

  // Update a user’s age
  const updateUserAge = (name, age) => {
    usersCollection.updateOne({ name }, { $set: { age } }, (err, result) => {
      if (err) throw err;
      console.log('User updated:', result.modifiedCount);
    });
  };

  // Example usage
  insertUser({ name: 'Alice', email: 'alice@example.com', age: 30 });
  getUsers();
  updateUserAge('Alice', 31);

  // Close the database connection
  client.close();
});


MySQL: Uses SQL queries to manage structured data in tables.
MongoDB: Uses BSON documents, offering flexibility and scalability.






