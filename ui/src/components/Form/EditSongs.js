import React, { Component } from 'react';

const EditSongs = ({ handleChange, handleSubmit, addField, removeSongs, playlistObj }) => {
    let arr = []
    console.log(playlistObj);
    playlistObj.songs.map((song, index) => {
        const element =
            <fieldset data-key={index} key={index} onChange={handleChange}>
                <label htmlFor="url" > Song Url:</label>
                <input
                    defaultValue= {song.url}
                    name="url"
                    type="text" />
                <label htmlFor="name">Song name:</label>
                <input
                    defaultValue= {song.name}
                    name="name"
                    type="text" />
                <button onClick={(e) => removeSongs(e)} className="btn btn-default"><i className="fas fa-times-circle"></i></button>
            </fieldset>
        arr.push(element)
    })
    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit your songs :</h2>
            <div id="fields_songs">
                {arr}
            </div>
            <button
                onClick={() => addField()}
                type="button"><i className="far fa-plus-square"></i>Add new field</button>
            <input type="submit" value="Edit" />
        </form>
    )
}
export default EditSongs;