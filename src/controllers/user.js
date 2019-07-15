const User = require('../models/user')

module.exports = {
    getAllUser: (req, res) => {
        User.find({})
        .then(data => res.send(data))
        .catch(error => res.send({
            message: "ups error happened, please call me to repair", error
        }))
    },
    createUser: (req, res) => {
        User.create({name: "Adit", age: 24, address:"Pasir Muncang Jaya"})
        .then(data => res.send(data))
        .catch(error => res.send(error))
    },

    deleteUser: (req, res) => {
        User.remove({
            name: "ucan"
        })
        .then(data => res.send(data))
        .catch(error => res.send(error))
    },

    updateUser: (req, res) => {
        User.findOneAndUpdate({name: "Adit"}, {age: 30}, (err, result) => {
            if(err) throw err
            res.send(result)
        })

    }
}