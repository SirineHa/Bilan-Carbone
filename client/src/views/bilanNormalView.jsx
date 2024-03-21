import React, {useState} from "react";
import BilanComponent from "../components/bilan/bilanComponent";

export default function BilanNormalView() {
    let userName = "wissal";
    let welcomePageContent = {
        title: "Bilan carbone 5 minutes",
        description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page",
        image: "https://cdn.futura-sciences.com/sources/images/qr/Celine/Empreinte%20carbone%20%20cienpiesnf%20-%20Fotolia.jpg"
    };

    let questionsList = [
        {
            id: "transport",
            type: "radio",
            title: "Pour vous rendre sur votre lieu de travail ou Université / école, vous prenez ? /1",
            description: "",
            image: "https://blog.educpros.fr/jean-charles-cailliez/files/2014/03/qcm.jpg",
            option: [
                {
                    title: "Transports en commun (Bus, Tram, RER, Métro)",
                    value: "transports_commun",
                    subQuestion: [
                        {
                            id: "transport_commun_aller_retour",
                            title: "Combien de km Aller-Retour avec le transport en commun? ",
                            type: "text",
                            description: "",
                        },
                    ]
                },
                {
                    title: "Vélo, de la marche à pied ",
                    value: "velo/pied",
                },
                {
                    title: "Voiture",
                    value: "voiture",
                    subQuestion: [
                        {
                            id: "voiture_coivoiturage",
                            title: "Faites-vous du Co-Voiturage ?",
                            type: "radio",
                            description: "",
                            option: [
                                {
                                    title: "Oui",
                                    value: "oui",
                                    subQuestion: [
                                        {
                                            id: "voiture_covoiturage_personne",
                                            title: "Avec combien de personnes en général ?",
                                            type: "text",
                                            description: "",
                                        }
                                    ]
                                },
                                {
                                    title: "Non",
                                    value: "non"
                                }
                            ]
                        },
                        {
                            id: "voiture_km",
                            title: "Combien de km Aller-Retour avec la voiture ? ",
                            type: "text",
                            description: "",
                        },
                    ]
                },
            ],
        },
        {
            id: 'transport_weekend',
            title: 'Pour les déplacements du week-end, vous prenez ?',
            type: "radio",
            description: "",
            image: "https://blog.educpros.fr/jean-charles-cailliez/files/2014/03/qcm.jpg",
            option: [
                {
                    title: "Transports en commun (Bus, Tram, RER, Métro)",
                    value: "transports_weekend_commun",
                    subQuestion: [
                        {
                            id: "transport_weekend_commun_aller_retour",
                            title: "Combien de km Aller-Retour avec le transport en commun? ",
                            type: "text",
                            description: "",
                        },
                    ]
                },
                {
                    title: "Vélo, de la marche à pied ",
                    value: "velo/pied",
                },
                {
                    title: "Voiture",
                    value: "voiture",
                    subQuestion: [
                        {
                            id: "voiture_weekend_coivoiturage",
                            title: "Faites-vous du Co-Voiturage ?",
                            type: "radio",
                            description: "",
                            option: [
                                {
                                    title: "Oui",
                                    value: "oui",
                                    subQuestion: [
                                        {
                                            id: "voiture_weekend_covoiturage_personne",
                                            title: "Avec combien de personnes en général ?",
                                            type: "text",
                                            description: "",
                                        }
                                    ]
                                },
                                {
                                    title: "Non",
                                    value: "non"
                                }
                            ]
                        },
                        {
                            id: "voiture_weekend_km",
                            title: "Combien de km Aller-Retour avec la voiture ? ",
                            type: "text",
                            description: "",
                        },
                    ]
                },
            ],
        },
        {
            id: "grand_deplacement_avion",
            title: "Pour les grand déplacement prenez-vous l'avion",
            type: "radio",
            description: "",
            image: "https://media.istockphoto.com/id/155439315/fr/photo/avion-de-passagers-voler-au-dessus-des-nuages-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=LRxXZHvGfbWnAM_ELCPbFHI9gdqJXDRqIy3xOM7m5tg=",
            option: [
                {
                    title: "Oui",
                    value: "oui",
                    subQuestion: [
                        {
                            id: "grand_deplacement_avion_km",
                            title: "Combien de km parcourez-vous en moyenne par an (aller / retour) en avion? ",
                            type: "text"
                        }
                    ]
                },
                {
                    title: "Non",
                    value: "non"
                }
            ]
        }
    ];
    
    const [response, setResponse] = useState({});

    function handleResponseChange(value) {
        console.log('handle bilon', value);
        setResponse({...response, ...value});
    }

    return (
        <div>
            <BilanComponent
                userName={userName}
                questionsList={questionsList}
                welcomeContent={welcomePageContent}
                onResponseChange={handleResponseChange}
            />
            <hr/>
            {JSON.stringify(response, null, 2)}
        </div>


    );
}