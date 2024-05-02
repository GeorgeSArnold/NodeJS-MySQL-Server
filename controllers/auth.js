// data > html > controller
// handle all data from html form

exports.register = (req, res) => {
    console.log(req.body);
    // frontend > check
    res.send("form submitted")
}