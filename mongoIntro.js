require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.DATABASE_URI;

// Set up configuration
const connectDB = async () => {
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log('Connected to MongoDB');

    } catch (err) {
        console.error('Connection error:', err);
    } finally {
        await client.close();
    }
};

connectDB();
