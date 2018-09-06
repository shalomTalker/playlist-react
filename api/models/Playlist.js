var ObjectId = require('mongodb').ObjectId;

class Playlist {
	static getAll (db) {
		return db.collection('playlist').find().toArray()
	}
	static getOne (db, playlistId) {
		return db.collection('playlist').find(
			{_id: new ObjectId(playlistId)}
		).toArray()
	}
	static add (db, newPlaylist) {
		db.collection('playlist').insert(newPlaylist);
		// var newplaylist = {
		// 	name: req.body.name, 
		// 	foods: req.body.foods, 
		// }

	}
	static replace (db, playlistId, updatedPlaylist) {
		db.collection('playlist').updateOne(
			{_id: new ObjectId(playlistId)}, // search
			{$set: updatedPlaylist} // update
		);
	}
	static delete (db, playlistId) {
		db.collection('playlist').deleteOne(
			{_id: new ObjectId(playlistId)}
		);
	}
}

module.exports = Playlist