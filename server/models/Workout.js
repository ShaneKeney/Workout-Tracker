const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: 'Day is Required'
    },
    exercises: [

    ],
    createdAt: {
        type: Date,
        default: Date.now
    },

    lastUpdated: Date
})

WorkoutSchema.methods.totalDuration = function() {
    let totalDuration = 0;

    this.exercises.forEach((exercise) => {
        totalDuration += exercise.duration;
    });
  
    return totalDuration;
}

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;