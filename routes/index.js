const express = require('express');
const router = express.Router();
const user = require ('../controller/user.js') ;

router.get('/users', user.index);
// router.get('/users/:id', user.show);
// router.post('/users', user.store);
// router.put('/users', user.update);
// router.destroy('/users', user.delete);

module.exports = router;