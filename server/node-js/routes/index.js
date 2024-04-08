const express = require('express');
const router = express.Router();

const avisRoutes = require('./avis');
const statRoutes = require('./stats');
const authRoutes = require('./auth');

router.use('/avis', avisRoutes);
router.use('/stats', statRoutes);
router.use('/', authRoutes);

module.exports = router;