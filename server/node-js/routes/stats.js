const express = require('express');
const Statistique = require('../models/Statistique'); // Assurez-vous que le chemin d'accès est correct
const router = express.Router();



// Route pour récupérer tous les statistiques
router.get('/GetStats', async (req, res) => {
    try {
      const statistiques = await Statistique.find();
        /*const statistiques = [
          { name: "Test 1", mode: "Normal", scoreTotal: "88", transport: "55", alimentation: "13", logement: "10", divers: "10", spe: "ING INFO", date: new Date("2024-01-15") },
              { name: "Test 2", mode: "Normal",  scoreTotal: "85", transport: "55", alimentation: "10", logement: "10", divers: "10", spe: "ING ENER", date: new Date("2024-02-20") },
              { name: "Test 3", mode: "Normal", scoreTotal: "92", transport: "45", alimentation: "15", logement: "22", divers: "10", spe: "ING INFO", date: new Date("2024-03-15") },
              { name: "Test 4", mode: "Normal",  scoreTotal: "84", transport: "55", alimentation: "19", logement: "0", divers: "10", spe: "ING TELECOM", date: new Date("2023-04-10") },
              { name: "Test 5", mode: "Normal",  scoreTotal: "90", transport: "55", alimentation: "15", logement: "20", divers: "10", spe: "ING INSTRU", date: new Date("2024-05-25") },
              { name: "Test 6", mode: "Normal",  scoreTotal: "88", transport: "40", alimentation: "18", logement: "20", divers:"10", spe: "ING MACS", date: new Date("2025-06-30") },
              { name: "Test 7", mode: "Normal",  scoreTotal: "40", transport: "0", alimentation: "10", logement: "18", divers: "12", spe: "ING INFO", date: new Date("2023-07-20") },
              { name: "Test 8", mode: "Normal",  scoreTotal: "67", transport: "36", alimentation: "11", logement: "10", divers: "10", spe: "ING ENER", date: new Date("2024-08-15") },
              { name: "Test 9", mode: "Normal",  scoreTotal: "70", transport: "55", alimentation: "15", logement: "0", divers: "10", spe: "ING INSTRU", date: new Date("2025-09-10") },
              { name: "Test 10", mode: "Normal",  scoreTotal: "78", transport:"10", alimentation: "25", logement:"33", divers: "10", spe: "ING TELECOM", date: new Date("2023-10-05") },
            ];*/
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
  console.log(req)
  const statistique = new Statistique({
      // Assurez-vous que ces champs correspondent à ceux de votre modèle Statistique
      name: req.body.name,
      mode: req.body.mode,
      scoreTotal: req.body.scoreTotal,
      transport: req.body.transport,
      alimentation: req.body.alimentation,
      logement: req.body.logement,
      divers: req.body.divers,
      spe: req.body.spe,
      date: Date.now(),
  });
  console.log(statistique);
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
router.get('/api/statistiques/totalScore', async (req, res) => {
  try {
    const statistiques = await Statistique.find();
    let total = statistiques.reduce((sum, stat) => sum + parseInt(stat.scoreTotal, 10), 0);

    res.json({ total });
  } catch (error) {
    console.error("Erreur lors de la récupération des statistiques: ", error);
    res.status(500).json({ message: "Erreur lors de la récupération des statistiques." });
  }
});
router.get('/api/statistiques/count', async (req, res) => {
  try {
    const count = await Statistique.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error("Erreur lors de la récupération du nombre de statistiques: ", error);
    res.status(500).json({ message: "Erreur lors de la récupération du nombre de statistiques." });
  }
});

/*
router.get('/api/statistiques/totalScore', (req, res) => {
  try {
    //const statistiques = await Statistique.find();
    const statistiques=[
      { name: "Test 1", mode: "Normal", scoreTotal: "88", transport: "55", alimentation: "13", logement: "10", divers: "10", spe: "ING INFO", date: new Date("2024-01-15") },
          { name: "Test 2", mode: "Normal",  scoreTotal: "85", transport: "55", alimentation: "10", logement: "10", divers: "10", spe: "ING ENER", date: new Date("2024-02-20") },
          { name: "Test 3", mode: "Normal", scoreTotal: "92", transport: "45", alimentation: "15", logement: "22", divers: "10", spe: "ING INFO", date: new Date("2024-03-15") },
          { name: "Test 4", mode: "Normal",  scoreTotal: "84", transport: "55", alimentation: "19", logement: "0", divers: "10", spe: "ING TELECOM", date: new Date("2023-04-10") },
          { name: "Test 5", mode: "Normal",  scoreTotal: "90", transport: "55", alimentation: "15", logement: "20", divers: "10", spe: "ING INSTRU", date: new Date("2024-05-25") },
          { name: "Test 6", mode: "Normal",  scoreTotal: "88", transport: "40", alimentation: "18", logement: "20", divers:"10", spe: "ING MACS", date: new Date("2025-06-30") },
          { name: "Test 7", mode: "Normal",  scoreTotal: "40", transport: "0", alimentation: "10", logement: "18", divers: "12", spe: "ING INFO", date: new Date("2023-07-20") },
          { name: "Test 8", mode: "Normal",  scoreTotal: "67", transport: "36", alimentation: "11", logement: "10", divers: "10", spe: "ING ENER", date: new Date("2024-08-15") },
          { name: "Test 9", mode: "Normal",  scoreTotal: "70", transport: "55", alimentation: "15", logement: "0", divers: "10", spe: "ING INSTRU", date: new Date("2025-09-10") },
          { name: "Test 10", mode: "Normal",  scoreTotal: "78", transport:"10", alimentation: "25", logement:"33", divers: "10", spe: "ING TELECOM", date: new Date("2023-10-05") },
        ];
    let total = 0;

    statistiques.forEach(stat => {
      const scores = parseInt(stat.scoreTotal);
      total += scores // Ajoute le dernier élément du tableau de scores
    });

    res.json({ total });
  } catch (error) {
    console.error("Erreur lors de la récupération des statistiques: ", error);
    res.status(500).json({ message: "Erreur lors de la récupération des statistiques." });
  }
});
router.get('/api/statistiques/count', (req, res) => {
  try {
    //const statistiques = await Statistique.find();
    const statistiques=[
      { name: "Test 1", mode: "Normal", scoreTotal: "88", transport: "55", alimentation: "13", logement: "10", divers: "10", spe: "ING INFO", date: new Date("2024-01-15") },
          { name: "Test 2", mode: "Normal",  scoreTotal: "85", transport: "55", alimentation: "10", logement: "10", divers: "10", spe: "ING ENER", date: new Date("2024-02-20") },
          { name: "Test 3", mode: "Normal", scoreTotal: "92", transport: "45", alimentation: "15", logement: "22", divers: "10", spe: "ING INFO", date: new Date("2024-03-15") },
          { name: "Test 4", mode: "Normal",  scoreTotal: "84", transport: "55", alimentation: "19", logement: "0", divers: "10", spe: "ING TELECOM", date: new Date("2023-04-10") },
          { name: "Test 5", mode: "Normal",  scoreTotal: "90", transport: "55", alimentation: "15", logement: "20", divers: "10", spe: "ING INSTRU", date: new Date("2024-05-25") },
          { name: "Test 6", mode: "Normal",  scoreTotal: "88", transport: "40", alimentation: "18", logement: "20", divers:"10", spe: "ING MACS", date: new Date("2025-06-30") },
          { name: "Test 7", mode: "Normal",  scoreTotal: "40", transport: "0", alimentation: "10", logement: "18", divers: "12", spe: "ING INFO", date: new Date("2023-07-20") },
          { name: "Test 8", mode: "Normal",  scoreTotal: "67", transport: "36", alimentation: "11", logement: "10", divers: "10", spe: "ING ENER", date: new Date("2024-08-15") },
          { name: "Test 9", mode: "Normal",  scoreTotal: "70", transport: "55", alimentation: "15", logement: "0", divers: "10", spe: "ING INSTRU", date: new Date("2025-09-10") },
          { name: "Test 10", mode: "Normal",  scoreTotal: "78", transport:"10", alimentation: "25", logement:"33", divers: "10", spe: "ING TELECOM", date: new Date("2023-10-05") },
        ];
    const count = statistiques.length; // Obtient le nombre d'éléments dans le tableau
    res.json({ count });
  } catch (error) {
    console.error("Erreur lors de la récupération du nombre de statistiques: ", error);
    res.status(500).json({ message: "Erreur lors de la récupération du nombre de statistiques." });
  }
});*/


module.exports = router;
