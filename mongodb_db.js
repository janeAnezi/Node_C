require('dotenv').config();
const mongoose = require('mongoose');

// Set up configuration
const con = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (err) {
        console.error('Connection error:', err);
    }
};

con();

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});
