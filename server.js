const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3002;