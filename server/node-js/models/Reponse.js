const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReponseSchema = new Schema({
    reponse: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    question: {
        type: Schema.Types.ObjectId, 
        ref: 'Question' 
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    statistique: {
        type: Schema.Types.ObjectId, 
        ref: 'Statistique' 
    },
});

// creation avis
ReponseSchema.statics.createReponse = async function(reponseData) {
    try {
        return await this.create(reponseData);
    } catch (error) {
        throw new Error(error);
    }
};

const Reponse = mongoose.model('Reponse', ReponseSchema);

module.exports = Reponse;