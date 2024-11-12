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


