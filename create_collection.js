var MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://anezi:o5BtxWBhvlZ5OH0G@anezi.7n8mp.mongodb.net/intro?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;

  // Check if database "mydb" exists
  db.admin().listDatabases({ nameOnly: true }).toArray(function(err, databases) {
    if (err) throw err;

    const dbExists = databases.some(dbInfo => dbInfo.name === "mydb");

    if (dbExists) {
      console.log("Database 'mydb' exists.");

      // Use the existing database
      var dbo = db.db("mydb");
      dbo.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
      });
    } else {
      console.log("Database 'mydb' does not exist. Creating...");
      // You can create the database here if needed (optional)
    }

    db.close();
  });
});