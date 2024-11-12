const fs = require('fs')
const read = fs.createReadStream('./demoFile.txt')

read.on('open', (err, data)=>{
    if(err) console.log(err)
    console.log('The file is open');
    fs.readFile('./demoFile.txt', (err, data)=> {
        console.log(data.toString());
    })
})