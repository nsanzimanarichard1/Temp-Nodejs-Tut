const mongoose = require('mongoose');
connectionString = 'mongodb+srv://nsanzimanarichard1:Rich&1234@nodejsp.rfhnpol.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=nodejsp'


const connectDb = async (url) => {
    try {
        await mongoose.connect(connectionString);
        // console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        // Handle the error appropriately (e.g., throw an error, exit the application)
        throw error;
    }
};

module.exports = connectDb;
