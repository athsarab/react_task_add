const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
); 

app.use(express.json());

app.get('/users', (req, res) => {
    controller.getUsers(users => {
        res.send(users);
    });
});

  app.get('/user', (req, res) => {
    const id = req.query.id;
    controller.getUserByID(id, user => {
        res.send(user);
    });
}
);  

app.post('/createuser',(req,res) => {
    controller.addUser(req.body, (callack) => {
        res.send();
    });
}
);

app.put('/updateuser',(req,res) => {
    controller.updateUser(req.body, (callack) => {
        res.send(callack);
    });
}
);

app.delete('/deleteuser',(req,res) => {
    controller.deleteUser(req.body.id, (callack) => {
        res.send(callack);
    });
}
);
 
module.exports = app;