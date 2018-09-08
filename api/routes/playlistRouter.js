var express = require('express')
var router = express.Router();
var PlaylistCtrl = require('../controllers/PlaylistCtrl.js')
var multer = require('multer')({ dest: "uploads/" })

router.get('/playlist', PlaylistCtrl.getAll)

router.get('/playlist/:playlistId', PlaylistCtrl.getOne)

router.post('/playlist_addAlbum',multer.single('image'), PlaylistCtrl.addAlbum)
router.post('/playlist_addAlbum/:playlistId', PlaylistCtrl.addSongs)
router.put('/playlist/:playlistId', PlaylistCtrl.replace)
router.delete('/playlist/:playlistId', PlaylistCtrl.delete)

module.exports = router;