const cors = require('cors');
const axios = require('axios');

const { sendQuizResultEmail } = require("../services/emailService");

exports.sendResultEMail = async function(req, res) {
  try {
    await sendQuizResultEmail(req.body.email, req.body.resultResponse, req.body.resultRequest);
    res.send({
      success: true,
      mail: req.body.email
     });
  } catch(e) {
    res.status(500).send({
      success: false,
      mail: req.body.email
     });
  }
 }



 exports.calculateresult = async (req, res) => {
  try {
    console.log(req.body);
    try {
      const data = req.body;
      // Appel à l'endpoint Flask pour calculer l'empreinte carbone
      const flaskResponse = await axios.post('http://localhost:5001/api/calcul_emission', data);
      
    
    let emissionBudget = 0;
    if (req.body.budget) {
      emissionBudget = (req.body.budget / 1000) * 1.9;
    }

    //pour envoiyee les donnes au flask et calculer ainsi renvoie les resultat au format {result:[]}
    res.send({
      result: [
        {
          label: "Transport",
          value: flaskResponse.data.Transport,
          color: "rgb(255, 99, 132)",
        },
        {
          label: "Alimentation",
          value: 100,
          color: "rgb(54, 162, 235)",
        },
        {
          label: "Logement",
          value: 100,
          color: "red",
        },
        {
          label: "Divers",
          value: 50,
          color: "green",
        },
      ],
      budget: emissionBudget,
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
}
  } catch (err) {
    //console.log(err);
    res.status(500).json({ message: err.message }); // Renvoyer un code d'erreur 500 en cas d'erreur
  }
}