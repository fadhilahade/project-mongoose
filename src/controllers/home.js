module.exports = {
  greetings: (req, res) => {
    try {
      res.send("Hallo everyone");
    } catch (error) {
      console.log(error);
    }
  },
  goodbye: (req, res) => {
    try {
      res.send("Goodbye everyone");
    } catch (error) {
      console.log(error);
    }
  }
};
