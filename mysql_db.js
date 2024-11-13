const mysql = require('mysql')

const myData = mysql.createConnection({host: 'localhost', user: 'ahnnieanezi@gmail.com', password: 'Y5UgYDtG4#-Lqu@'})

myData.connect((err)=>{
    if(err) console.log(err); 
    console.log("Connected!");
})