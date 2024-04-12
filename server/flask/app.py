from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/api/calcul_emission', methods=['POST'])
def calcul_emission_route():    
    # Initialisation des résultats par secteur
    transport_total = 0
    alimentation_total = 0
    logement_total = 0
    divers_total = 0

    data = request.get_json()
    print(data)
    print(type(data))

    for t in data.items():
        print(t)
        if t[0] == 'transport':
            if t[1] == 'velo/pied':
                transport_total += 750
            elif t[1] == 'voiture':
                transport_total += int(data['voiture_km'])*100
            elif t[1] == 'transports_commun':
                transport_total += int(data['transport_commun_aller_retour'])*10
        elif t[0] == 'transport_weekend':
            if t[1] == 'velo/pied':
                transport_total += 750
            elif t[1] == 'voiture':
                transport_total += int(data['voiture_weekend_km'])*100
            elif t[1] == 'transports_weekend_commun':
                transport_total += int(data['transport_weekend_commun_aller_retour'])*10


    # Construction du résultat final
    result = {
        "Transport": transport_total/100,
        "Alimentation": alimentation_total/100,
        "Logement": logement_total/100,
        "Divers": divers_total/100
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=5001)