const express = require('express');
const router = express.Router();
const { getDashboard } = require('../controllers/dashboardController');
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated');

router.get('/dashboard-admin', ensureAuthenticated, getDashboard);

module.exports = router;