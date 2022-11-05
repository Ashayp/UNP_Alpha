const express = require('express');
//const { app } = require('..');
const registrationRoutes = require('./registration');
const parents = require('./parents');
const kid = require('./kid');
const request = require('./friend_requests');

// router.get('/', (req, res) => res.send('It works.'));
// router.get('/registration/', (req, res) => res.send());

const constructorMethod = (app) => {

    app.use('/register', registrationRoutes);
    app.use('/parents', parents);
    app.use('/kid', kid);
    app.use('/request', request);

    app.use('*', (req, res) => {
      res.status(404).json({error: 'Not found'});
    });
  };



module.exports = constructorMethod;