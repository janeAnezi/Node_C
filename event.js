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
//console.log(__dirname);

//  ****** Uploading Files ******

const formidable = require('formidable')
const http = require('http')
const fs = require('fs');
//const { dirname } = require('path');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      const form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        console.log(files)
        const oldpath = files.filetoupload.filepath;
        const newpath = 'C:\Users\Administrator\Desktop\workspace\Company\GMT_courses\courses\node_course\Intro' + files.filetoupload.originalFilename;
        fs.rename('oldpath', 'newpath', (err)=>{
            if(err) console.log(err);
        })
        res.write('File uploaded and moved');
        res.end();
      });
    } 
    
    
    
    else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  }).listen(8080);

  