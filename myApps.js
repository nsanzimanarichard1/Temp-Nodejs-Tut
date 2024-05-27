require('dotenv').config({ path: './starter/db/.env' });
const express = require('express');
const app = express();
const tasksRouter = require('./routers/tasks');
const connectDb = require('./starter/db/connect');

// Middleware
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Routes
app.use('/api/v1/tasks', tasksRouter);

// Define the port
const port = process.env.PORT || 3000;

// Start the server  
const start = async () => {
    try {
        // console.log('Connection String:', process.env.connectionString); // Debugging line
        await connectDb(process.env.connectionString);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};

start();
