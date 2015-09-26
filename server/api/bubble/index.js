'use strict';

var express = require('express');
var controller = require('./bubble.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/findByShow/:id2', controller.findByShow);

module.exports = router;