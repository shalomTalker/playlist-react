var express = require('express')
var router = express.Router();
var PlaylistCtrl = require('../controllers/PlaylistCtrl.js')
var multer = require('multer')({ dest: "uploads/" })

router.get('/playlist', PlaylistCtrl.getAll)
router.get('/playlist/:playlistId', PlaylistCtrl.getOne)

router.post('/playlist/addAlbum',multer.single('image'), PlaylistCtrl.addAlbum)
router.post('/playlist/addAlbum/:playlistId', PlaylistCtrl.addSongs)

router.put('/playlist/editAlbum', multer.single('image'), PlaylistCtrl.replaceAlbum)
router.put('/playlist/editAlbum/:playlistId', PlaylistCtrl.replace)

router.delete('/playlist/:playlistId', PlaylistCtrl.delete)

module.exports = router;