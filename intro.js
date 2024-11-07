// ***** DAY ONE ****

// var http = require('http')

// var date = require('./dateTimeModule')

// http.createServer(function (req,res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write(date.month() +' Hello Helen, Welcome to Node' )
//      res.end()
// }).listen(8000); 


// ****** DAY TWO ******

//  ********  Reading file from the server ********

// const http = require('http')
// const fs = require('fs')

// http.createServer((req,res) => {
//     // a text file
//     // fs.readFile('./about.txt', (err, data)=>{
//     //     if (err) throw err;
//     //     res.writeHead(200, {'Content-Type': 'text/plain'});
//     //     res.write(data);
//     //     res.end();
//     // })

//     // a html file
//     fs.readFile('./home.html', (err,data)=>{
//         if (err) throw err;
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     })

// }).listen(75)

// ******* Creating Files from the server *********

const fs = require('fs');

// fs.appendFile('./news.txt', 'This is the highlight of the day', (err)=> {
//     if (err) throw err;
//     console.log('Content created!');
// })

fs.open('./newJist.txt', 'w', (err, file)=>{
    if (err) throw err;
    console.log('Opened!');
})

// fs.writeFile('./news.txt', 'This is the highlight of the day with national always falling', (err)=> {
//     if (err) throw err;
//     console.log('Content created!');
// })


// ******** Updating files ****

// fs.appendFile('./news.txt', ' This file has just been updated ', (err)=> {
//     if (err) throw err;
//     console.log('Content created!');
// })


// fs.writeFile('./newJist.txt', 'This is the second highlight of the day', (err)=> {
//     if (err) throw err;
//     console.log('Content created!');
// })

// ******** Deleting files ****

// fs.unlink('./newJist.txt', (err)=>{
//     if (err) throw err;
//     console.log('Deleted!!!!');
// })

// ******** Renaming files ****

// fs.rename('./news.txt', './highlight.txt', (err)=>{
//     if (err) throw err;
//     console.log('Renamed!!');
// })


// ******** url ****

const url = require('url')
const address = 'https://www.google.com/search?q=cook&oq=cook&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIKCAEQLhixAxiABDIKCAIQABixAxiABDIHCAMQABiABDIWCAQQLhiDARjHARixAxjRAxiABBiKBTIHCAUQABiABDIKCAYQABixAxiABDIKCAcQLhixAxiABDIHCAgQLhiABDIHCAkQABiPAtIBCDE0NzhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'

const addr = url.parse(address, true);
console.log(addr);