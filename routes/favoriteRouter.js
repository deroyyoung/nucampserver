const express = require('express');
const favoriteRouter = express.Router();
const Favorite = require('../models/favorite');
const authenticate = require('../authenticate');


favoriteRouter.route('/')

favoriteRouter.Router('/:campsiteId')