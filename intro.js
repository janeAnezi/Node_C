// ***** DAY ONE ****

// var http = require('http')

// var date = require('./dateTimeModule')

// http.createServer(function (req,res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write(date.month() +' Hello Helen, Welcome to Node' )
//      res.end()
// }).listen(8000); 


// ****** DAY TWO ******

const http = require('http')
const fs = require('fs')

http.createServer((req,res) => {
    // a text file
    fs.readFile('./about.txt', (err, data)=>{
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(data);
        res.end();
    })

    // a html file

}).listen(75)