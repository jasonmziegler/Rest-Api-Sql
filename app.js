'use strict';

// load modules
const express = require('express');
const morgan = require('morgan');
const { sequelize } = require('./models');

// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// create the Express app
const app = express();

// setup morgan which gives us http request logging
app.use(morgan('dev'));

// setup a friendly greeting for the root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the REST API project!',
  });
});

// A /api/users GET route that will return all properties and values for the currently authenticated User along with a 200 HTTP status code.
app.get('/api/users', (async (req, res) => {
  res.status(200).json({ "message": "This GET route should return user information for the currently authenticated User" });
}));

// A /api/users POST route that will create a new user, set the Location header to "/", and return a 201 HTTP status code and no content.
app.post('/api/users', (async (req, res) => {
  res.status(201).json({ "message": "This POST route should create a user and return no content" });
}));

// A /api/courses GET route that will return all courses including the User associated with each course and a 200 HTTP status code.
app.get('/api/courses', (async (req, res) => {
  res.status(200).json({ "message": "This GET route should return all courses and User Associateed" });
}));
// A /api/courses/:id GET route that will return the corresponding course including the User associated with that course and a 200 HTTP status code.
app.get('/api/courses/:id', (async (req, res) => {
  res.status(200).json({ "message": "This GET route should return the course with the associated id" });
}));
// A /api/courses POST route that will create a new course, set the Location header to the URI for the newly created course, and return a 201 HTTP status code and no content.
app.post('/api/courses', (async (req, res) => {
  res.status(201).json({ "message": "This POST route should create a course and return no content" });
}));
// A /api/courses/:id PUT route that will update the corresponding course and return a 204 HTTP status code and no content.
app.put('/api/courses/:id', (async (req, res) => {
  res.status(204).json({ "message": "This PUT route should UPDATE a course and return no content" });
}));
// A /api/courses/:id DELETE route that will delete the corresponding course and return a 204 HTTP status code and no content.
app.delete('/api/courses/:id', (async (req, res) => {
  res.status(204).json({ "message": "This DELETE route should DELETE a course and return no content" });
}));

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

// setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});

// set our port
app.set('port', process.env.PORT || 5000);

// Test DB Connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
