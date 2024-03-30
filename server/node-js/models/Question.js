const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    type_bilan_carbone: {
        type: String,
        required: true
    },
    enoncer: {
        type: String,
        required: true
    },
    parametre: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    admin: {
        type: Schema.Types.ObjectId, 
        ref: 'Admin' 
    },
});

// creation avis
QuestionSchema.statics.createQuestion = async function(questionData) {
    try {
        return await this.create(questionData);
    } catch (error) {
        throw new Error(error);
    }
};

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;