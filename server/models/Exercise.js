const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({

    type: {
        type: String,
        required: 'Exercise Type Required',
        trim: true,
    },
    name: {
        type: String,
        required: 'Exercise Name Required',
        trim: true
    },
    duration: {
        type: Number,
        required: 'Exercise Duration required',
    },
    weight: {
        type: Number,
        required: 'Exercise weight required',
    },
    reps: {
        type: Number,
        required: 'Exercise reps required',
    },
    sets: {
        type: Number,
        required: 'Exercise sets required',
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    },

    lastUpdated: Date
})

ExerciseSchema.methods.lastUpdatedDate = function() {
    this.lastUpdated = Date.now();
  
    return this.lastUpdated;
}

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;