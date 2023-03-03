const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 25
    },

    date: {
       type: Number,
    },
    ratings: {
       type: Number,
       required: [true,"Please rate us !!"],
       min: 1,
       max: 10
    },
    isWatched: {
       type: Boolean,
        default: false
    }

})


const Movie = mongoose.model("Movie",seriesSchema)

module.exports = Movie;