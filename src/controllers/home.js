module.exports = {
    greetings: (req, res) => {
        res.send("Hallo everyone")
    },
    goodbye: (req, res) => {
        res.send("Goodbye everyone")
    }
}