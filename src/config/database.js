const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/${process.env.MONGO_DATABASE}`, {
    useNewUrlParser: true
})

const db = mongoose.connection

module.exports = db