from flask import Flask, request, jsonify

app = Flask(__name__)

def calcul_emission_transport(distance_km, facteur_emission_voiture):
    emission_transport = distance_km * 1
    return emission_transport

def calcul_emission_energie(conso_kwh, facteur_emission_electricite):
    emission_energie = conso_kwh * 2
    return emission_energie

def calcul_emission_alimentation(conso_viande_kg, conso_vegetaux_kg, facteur_emission_viande, facteur_emission_vegetaux):
    emission_alimentation = (conso_viande_kg * 1) + (conso_vegetaux_kg * 2)
    return emission_alimentation

@app.route('/api/calcul_emission', methods=['POST'])
def calcul_emission_route():
    data = request.get_json()
    distance_km = data['distance_km']
    facteur_emission_voiture = data['facteur_emission_voiture']
    conso_kwh = data['conso_kwh']
    facteur_emission_electricite = data['facteur_emission_electricite']
    conso_viande_kg = data['conso_viande_kg']
    conso_vegetaux_kg = data['conso_vegetaux_kg']
    facteur_emission_viande = data['facteur_emission_viande']
    facteur_emission_vegetaux = data['facteur_emission_vegetaux']
    
    emission_transport = calcul_emission_transport(distance_km, facteur_emission_voiture)
    emission_energie = calcul_emission_energie(conso_kwh, facteur_emission_electricite)
    emission_alimentation = calcul_emission_alimentation(conso_viande_kg, conso_vegetaux_kg, facteur_emission_viande, facteur_emission_vegetaux)
    
    total_emission = emission_transport + emission_energie + emission_alimentation
    
    return jsonify({
        "emission_transport": emission_transport,
        "emission_energie": emission_energie,
        "emission_alimentation": emission_alimentation,
        "total_emission": total_emission
    })

if __name__ == '__main__':
    app.run(debug=True)
