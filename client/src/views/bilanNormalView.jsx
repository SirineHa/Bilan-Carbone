import React from "react";
import BilanComponent from "../components/bilan/bilanComponent";

export default function BilanNormalView() {
    let userName = "wissal";
    let welcomePageContent = {
      title: "Test Bilan Normal",
      description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page",
      image: "https://s3-eu-west-1.amazonaws.com/tpd/logos/541bf82900006400057a6b29/0x0.png"
    };
  
    let questionsList = [
      {
        image: "https://blog.educpros.fr/jean-charles-cailliez/files/2014/03/qcm.jpg",
        description: " description du question 1",
        title:
          "Pour vous rendre sur votre lieu de travail ou Université / école, vous prenez ?",
        type: "radio",
        id: "transport",
        option: [
          {
            title: "Transports en commun (Bus, Tram, RER, Métro)",
            value: "transports_commun",
            subQuestion: [
              {
                description: "desc sub 1",
                id: "transport_commun_aller_retour",
                type: "text",
                title: "Combien de km Aller-Retour ? "
              },
              {
                description: "desc sub 2",
                id: "transport_commun_aller_retour",
                type: "text",
                title: "Combien de km Aller-Retour ? / 2"
              }
            ]
          },
          {
            title: "Vélo, de la marche à pied ",
            value: "velo/pied",
          },
          {
            title: "Voiture",
            value: "voiture",
          },
        ],
      },
    ];

    return (
      <BilanComponent
        userName={userName}
        questionsList={questionsList}
        welcomeContent={welcomePageContent}
      />
    );
}