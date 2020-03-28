const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: 'Day is Required'
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },

    lastUpdated: Date
})

WorkoutSchema.methods.lastUpdatedDate = function() {
    this.lastUpdated = Date.now();
  
    return this.lastUpdated;
}

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;