require('dotenv').config({ path: './starter/db/.env' });

const express = require('express');
const app = express();
const tasksRouter = require('./routers/tasks');
const connectDb = require('./starter/db/connect');
const notFound = require('./starter/middleware/not-found');
const errorHandler = require('./starter/middleware/error-handler')

process.on('warning', (warning) => {
    console.trace(warning);
});

app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Routes
app.use('/api/v1/tasks', tasksRouter);

// Not found middleware
app.use(notFound);
  
// error handler
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // console.log('Connection String:', process.env.connectionString);
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
