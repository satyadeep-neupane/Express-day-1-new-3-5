const User = require('./User');

module.exports = (app) => {
    app.get('/user', (req, res) => {
        res.json(User.find());
    });
    
    app.post('/user', (req, res) => {
        try{
            const user = new User(req.body);
            user.save();
            res.send(user);
        }catch(err)
        {
            res.send(err.message);
        }
    });
    
    app.delete('/user/:id', (req, res) => {
        User.deleteById(req.params.id);
        res.send("Deleted");
    });
}
