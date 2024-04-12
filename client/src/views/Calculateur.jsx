import React, { useState } from 'react';
import axios from 'axios';

export const Calculateur = () => {
    const [carbonFootprint, setCarbonFootprint] = useState(null);
    const [formData, setFormData] = useState({
        distance_km: '',
        facteur_emission_voiture: '',
        conso_kwh: '',
        facteur_emission_electricite: '',
        conso_viande_kg: '',
        conso_vegetaux_kg: '',
        facteur_emission_viande: '',
        facteur_emission_vegetaux: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/flask/calculate_carbon_footprint', formData);
            setCarbonFootprint(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Distance (km):
                    <input type="number" name="distance_km" value={formData.distance_km} onChange={handleChange} />
                </label>
                <label>
                    Facteur d'émission de voiture:
                    <input type="number" name="facteur_emission_voiture" value={formData.facteur_emission_voiture} onChange={handleChange} />
                </label>
                {/* Ajoutez d'autres champs d'entrée pour les autres catégories d'empreinte carbone */}
                <button type="submit">Calculate Carbon Footprint</button>
            </form>
            {carbonFootprint && (
                <div>
                    <h2>Carbon Footprint</h2>
                    <p>Transport: {carbonFootprint.emission_transport}</p>
                    <p>Energy Consumption: {carbonFootprint.emission_energie}</p>
                    <p>Diet: {carbonFootprint.emission_alimentation}</p>
                    <p>Total: {carbonFootprint.total_emission}</p>
                </div>
            )}
        </div>
    );
}