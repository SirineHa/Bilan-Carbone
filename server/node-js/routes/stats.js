const express = require('express');
const Statistique = require('../models/Statistique'); // Assurez-vous que le chemin d'accès est correct
const router = express.Router();


// Route pour récupérer tous les statistiques
router.get('/GetStats', async (req, res) => {
    try {
        const statistiques = await Statistique.find();
        res.json(statistiques);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour récupérer les trois avis les plus récents
router.get('/Get3Stats', async (req, res) => {
  try {
    const statistiques = await Statistique.find().sort({date: -1}).limit(3);
    res.json(statistiques);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Route pour créer un nouvel statistique
router.post('/AddStats', async (req, res) => {
  const statistique = new Statistique({
      // Assurez-vous que ces champs correspondent à ceux de votre modèle Statistique
      name: req.body.name,
      mode: req.body.mode,
      score: req.body.score,
      spe: req.body.spe,
      date: Date.now(),
  });

  try {
      const newStatistique = await statistique.save();
      res.status(201).json(newStatistique);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});



// Route pour supprimer un avis
router.delete('/DeleteStats/:id', async (req, res) => {
  try {
    const statistique = await Statistique.findByIdAndDelete(req.params.id);
    if (!statistique) {
      return res.status(404).json({ message: 'Statistique not found' });
    }

    res.json({ message: 'Statistique deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;