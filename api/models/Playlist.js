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
	static addAlbum (db, newAlbum, res) {
		db.collection('playlist').insertOne(newAlbum, (err, records)=>{
			res.send(201, records.ops[0]._id)
		})
	}
	static addSongs (db, songs, playlistId) {
		console.log(songs, playlistId)
		db.collection('playlist').update({ _id: playlistId },
			{ $set: { $each: [songs] } });
	}
	// for edit songs album
	// { $push: { songs: { $each: SongsById.songs } } }
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