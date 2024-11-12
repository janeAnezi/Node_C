// const fs = require('fs')
// const read = fs.createReadStream('./demoFile.txt')

// read.on('open', (err, data)=>{
//     if(err) console.log(err)
//     console.log('The file is open');
//     fs.readFile('./demoFile.txt', (err, data)=> {
//         console.log(data.toString());
//     })
// })



// const fs = require('fs')

// fs.createReadStream('./about.txt').on('open', ()=>{
//     console.log('The file is open')

//     fs.readFile('./about.txt', (err, data)=>{
//         if (err) console.log(err);
//         console.log(data.toString());
//     })
// })


//  ****** Creating Events ******

// const event = require('events')
// const eventEmitter = new event.EventEmitter()

// eventEmitter.on('shout', ()=>{
//     console.log('shouted!!');
// })

// eventEmitter.emit('shout');

//  ****** Uploading Files ******

const formidable = require('formidable')
const http = require('http')

http.createServer((req, res)=>{
    if (req.url == '/fileupload') {
        const form = new formidable.IncomingForm()
    }



    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
    res.write('<input type="file" name="filetoupload"> <br><br>')
    res.write('<input type="submit">')
    res.write('</form>')
    res.end();
}).listen(2024)