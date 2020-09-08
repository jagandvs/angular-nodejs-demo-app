const express = require('express');
const controller = require('../controller/controller')

const router = express.Router();
router.post('/api/users/authenticate', controller.authenticate)
router.get('/api/getBomMaster', controller.getBomMaster);
router.get('/api/getItemMaster', controller.getItemMaster);
router.get('/api/getUnitMaster', controller.getUnitMaster);
router.post('/api/postBomMaster', controller.postBomMaster);
router.post('/api/postBomDetail', controller.postBomDetail);
router.put('/api/deleteBomTable', controller.deleteBomTable);
router.get('/api/getBomDetailTable', controller.getBomDetailTable);
router.put('/api/updateBomMaster', controller.updateBomMaster);



// router.get('/api/getAll', controller.getAll);
// 
// router.post('/api/addNewData', controller.addNewData);
// router.put('/api/updateData', controller.updateData);
// router.delete('/api/deleteData', controller.deleteData);

module.exports = router;