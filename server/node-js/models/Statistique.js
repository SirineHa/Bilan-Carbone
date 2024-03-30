const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatistiqueSchema = new Schema({
    resultat: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    reponse: {
        type: Schema.Types.ObjectId, 
        ref: 'Reponse' 
    },
});

// creation avis
StatistiqueSchema.statics.createStatistique = async function(statistiqueData) {
    try {
        return await this.create(statistiqueData);
    } catch (error) {
        throw new Error(error);
    }
};

const Statistique = mongoose.model('Statistique', StatistiqueSchema);

module.exports = Statistique;