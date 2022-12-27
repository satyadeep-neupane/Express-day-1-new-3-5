const User = require('../model/User');

exports.store = (req, res) => {
    try{
        console.log(req.body);
        const user = new User(req.body);
        user.save();
        res.send(user);
    }catch(err)
    {
        res.send(err.message);
    }
}

exports.index = (req, res) => {
    res.json(User.find());
}

exports.destroy = (req, res) => {
    User.deleteById(req.params.id);
    res.send("Deleted");
}
