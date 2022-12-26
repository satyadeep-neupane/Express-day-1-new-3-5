const Role = require('../model/Role');

exports.index = (req, res) => {
    res.json(Role.find());
}

exports.store = (req, res) => {
    try{
        const role = new Role(req.body);
        role.save();
        res.send(role);
    }catch(err)
    {
        res.send(err.message);
    }
}

exports.destroy = (req, res) => {
    Role.deleteById(req.params.id);
    res.send("Deleted");
}

