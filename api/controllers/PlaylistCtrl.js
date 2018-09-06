var Playlist = require('../models/playlist.js')
var fs = require('fs')

class PlaylistCtrl {
	static getAll (req, res) {
		var db = req.app.get('db')
		Playlist.getAll(db)
		.then(data => {
			res.json(data)
		})
	}
	static getOne (req, res) {
		var db = req.app.get('db')
		Playlist.getOne(db, req.params.playlistId)
		.then(data => {
			res.json(data)
		})
	}
	static add (req, res) {
		var db = req.app.get('db')
		if (!fs.existsSync(`../ui/public/docs/${req.body.name}`)) {
			fs.mkdirSync(`../ui/public/docs/${req.body.name}`);
		}
		fs.rename(req.file.path, `../ui/public/docs/${req.body.name}/${req.file.originalname}`, (err) => {
			console.log(err)
		})
		req.body.image = `docs/${ req.body.name }/${req.file.originalname}`
		Playlist.add(db, req.body);
		res.send(201);
	}
	static replace (req, res) {
		var db = req.app.get('db')
		Playlist.replace(db, req.params.playlistId, req.body);
		res.send(204);
	}
	static delete (req, res) {
		var db = req.app.get('db')
		Playlist.delete(db, req.params.playlistId);
		res.send(204);
	}
}


module.exports = PlaylistCtrl