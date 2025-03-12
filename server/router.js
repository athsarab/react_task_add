 const express = ewquire('express');
 const router = express.Router();
    const controller = require('./controller');

router.get('/users',controller.getUsers);
router.get('/user',controller.getUserByID);
router.post('/adduser',controller.addUser);
router.put('/updateuser',controller.updateUser);
router.delete('/deleteuser',controller.deleteUser);

module.exports = router;