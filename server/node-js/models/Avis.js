const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvisSchema = new Schema({
    titre: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
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
});

// creation avis
AvisSchema.statics.createAvis = async function(avisData) {
    try {
        return await this.create(avisData);
    } catch (error) {
        throw new Error(error);
    }
};

const Avis = mongoose.model('Avis', AvisSchema);

module.exports = Avis;