import React, { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function BilanResultComponent(props) {
  const userName = props.userName || "";
  const questionResponse = props.questionResponse || {};

  const [reponse, setReponse] = useState(null);
  const [donneesChart, setDonneesChart] = useState(null);
  const [email, setEmail] = useState(null);

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        display: false,
        // S'assurer que chaque légende est sur sa propre ligne
        onHover: function(e) {
          e.native.target.style.cursor = 'pointer';
        }
      }
    }
  };

  useEffect(() => {
    // Fonction pour effectuer l'appel au backend
    const appelerBackend = async () => {
      try {
        const reponse = await fetch("http://localhost:4000/result/calculate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(questionResponse),
        });
        if (!reponse.ok) {
          throw new Error("La requête au backend a échoué");
        }
        const donnees = await reponse.json();
        setReponse(donnees);
        setDonneesChart({
          labels: donnees.result?.map(item => item.label),
          datasets: [
            {
              data: donnees.result?.map(item => item.value),
              backgroundColor: donnees.result?.map(item => item.color),
              hoverOffset: 4,
            },
          ],
        });
      } catch (erreur) {
        console.error("Erreur lors de l’appel au backend:", erreur);
      }
    };

    // Appeler la fonction appelerBackend lors du chargement du composant
    appelerBackend();
  }, [questionResponse]); 

  function handleMailChange(changeEvent) {
    setEmail(changeEvent.target.value);
  }



  return (
    <div className="flex flex-col bg-slate-100">
      <div className="flex flex-col my-7 max-w-full max-md:mb-10">
        {reponse === null && "Loding ....."}
        {reponse && donneesChart && (
          <div>
            <div className="min-h-screen flex justify-center items-center">
              <div className="bg-white rounded-2xl shadow-xl flex overflow-hidden max-w-6xl mx-auto">
                <div className="w-1/2 p-10 space-y-6 text-center">
                  <h1 className="text-3xl font-bold text-gray-800">
                    Bilan carbone
                  </h1>
                  <div className="relative">
                    <div className="text-center">
                      <span className="text-6xl font-semibold">
                        {reponse?.result
                          ?.map((item) => item.value)
                          .reduce((accumulator, currentValue) => {
                            return accumulator + currentValue;
                          }, 0)}
                      </span>
                      <p className="text-gray-500">TCO2e/an</p>
                    </div>
                    <div className="mx-auto mt-3 w-1/2">
                      <Doughnut data={donneesChart} options={options} />
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="space-y-2 w-1/2 mx-auto">
                  {reponse?.result?.map((result, index) => {
                        return (
                          <div
                            className="flex items-center"
                            key={"result-" + index}
                          >
                            <span
                              className="block w-3 h-3 rounded-full mr-2"
                              style={{ backgroundColor: result.color }}
                            ></span>
                            <span className="text-sm text-gray-600">
                              {result.label} - {result.value} TCO2e/an
                            </span>
                          </div>
                        );
                      })}
                   
                  </div>
                </div>

                <div className="w-1/2 bg-blue-200 p-10 space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="block p-2 bg-blue-500 rounded-full"></span>
                      <h2 className="text-xl font-semibold text-gray-800">
                        Achats & Support
                      </h2>
                    </div>
                    <p className="text-sm text-gray-600">
                      Limitation de nos déchets, cartons 100% recyclables,
                      optimisation de nos emballages...
                    </p>
                  </div>

                  <div className="space-x-4 justify-center text-center">
                    <input
                      type="email"
                      id="email-adr"
                      className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Votre addresse E-mail"
                      onChange={handleMailChange}
                    />
                    <button className="px-6 py-2 rounded bg-blue-500 text-white font-semibold">
                      Envoyer résultat par E-mail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="justify-center px-8 py-12 mt-3 text-base leading-6 text-gray-500 bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
        © 2021 Themesberg, LLC. All rights reserved.
      </div>
    </div>
  );
}
