var express = require('express')
var router = express.Router();
var PlaylistCtrl = require('../controllers/PlaylistCtrl.js')
var multer = require('multer')({ dest: "uploads/" })

router.get('/playlist', PlaylistCtrl.getAll)

router.get('/playlist/:playlistId', PlaylistCtrl.getOne)

router.post('/playlist',multer.single('image'), PlaylistCtrl.add)
router.put('/playlist/:playlistId', PlaylistCtrl.replace)
router.delete('/playlist/:playlistId', PlaylistCtrl.delete)

module.exports = router;