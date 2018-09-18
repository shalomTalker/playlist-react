var ObjectId = require('mongodb').ObjectId;

class Playlist {
	static getAll(db) {
		return db.collection('playlist').find().toArray()
	}
	static getOne(db, playlistId) {
		return db.collection('playlist').find(
			{ _id: new ObjectId(playlistId) }
		).toArray()
	}
	static addAlbum(db, newAlbum, res) {
		db.collection('playlist').insert(newAlbum, (err, records) => {
			res.status(201).send(records.ops[0]._id)
		})
	}
	static addSongs(db, songs, playlistId) {
		// console.log(typeof songs, JSON.parse(playlistId));
		songs.map((song, i) => {
			db.collection('playlist').update({ _id: new ObjectId(JSON.parse(playlistId)) },
				{ $push: { songs: song } });
		})
	}
	static replace(db, playlistId, updatedPlaylist) {
		db.collection('playlist').updateOne(
			{ _id: new ObjectId(playlistId) }, // search
			{ $set: updatedPlaylist } // update
		);
	}
	static delete(db, playlistId) {
		console.log(playlistId)
		db.collection('playlist').deleteOne(
			{ _id: ObjectId(playlistId) }
		);
	}
}

module.exports = Playlist