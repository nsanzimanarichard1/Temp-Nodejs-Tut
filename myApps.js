// const express = require('express');

// const app = express();
// const tasks = require('./routers/tasks');
// const connection = require('./starter/db/connect');
// // const path = require('path')
// // const dotenv = require('dotenv');
// // dotenv.config({ path: `${__dirname}/config.env` });

// // app.use('/starter', express.static(path.join(__dirname, './starter/db/env')));

// app.use(express.json());
// app.use('/api/v1/tasks', tasks);

// app.get('/', (req, res) => {
//   res.send('Task Manager App');
// });

// const port = 3000;

// const start = async () => {
//   try {
//     // Connect to MongoDB database by hidding usercredentials and authontication by dotenv
//     // await connection(process.env.connectionString);
//     await connection();
//     app.listen(port, () => {
//       console.log(`server is listening to port ${port} and is connected to db`);
//     });
//   } catch (error) {
//     console.error(error);
//     // Throw the error to prevent server startup
//     throw error;
//   }
// };

// start();

const express = require('express');
const app = express();
const tasksRouter = require('./routers/tasks');
const connectDb = require('./starter/db/connect');
const dotenv = require('dotenv').config();

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
        await connectDb(process.env.dotenv);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};

start();
