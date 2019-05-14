const express = require('express');
const session = require('express-session');
import { defineComputerElements } from './utils/functions';
const app = express();

let usersPastElements = {};

app.use(
  session({
    secret: 'PierrePapierCiseaux',
    resave: false,
    saveUninitialized: true,
  })
);

app.post('/computerElement/:userElements', (req, res) => {
  const {
    params: { userElements },
    session: { id: userId },
  } = req;
  usersPastElements = {
    ...usersPastElements,
    [userId]: [...usersPastElements[userId], userElements],
  };
  const computerElement = defineComputerElements(usersPastElements[userId]);
  res.send(computerElement);
});

app.delete('/elementsHistory', (req, res) => {
  const {
    session: { id: userId },
  } = req;
  usersPastElements = { ...usersPastElements, [userId]: [] };
  res.sendStatus(200);
});

app.listen(8080, () => console.log('server started'));
