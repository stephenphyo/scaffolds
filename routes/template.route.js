const router = require('express').Router();

/* Controllers Imports */
const templateCtrl = require('../controllers/template.controller');

/* GET */
router.get('/', templateCtrl.getMethod);

module.exports = router;