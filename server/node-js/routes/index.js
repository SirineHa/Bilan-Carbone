const express = require('express');
const router = express.Router();

// Importez vos autres routeurs ici
const avisRoutes = require('./avis');
const statRoutes = require('./stats');

// Utilisez vos autres routeurs ici
router.use('/avis', avisRoutes);
router.use('/stats', statRoutes);

module.exports = router;