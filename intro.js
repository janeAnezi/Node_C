var http = require('http')

var date = require('./dateTimeModule')

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(date.dateTime() + ' Hello Helen, Welcome to Node')
     res.end()
}).listen(8000);