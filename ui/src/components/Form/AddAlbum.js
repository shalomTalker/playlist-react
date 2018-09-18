import React, { Component } from 'react';

const AddAlbum = ({ handleSubmit, handleChange, handleFile}) => {
    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h2>create your album :</h2>
            <label htmlFor="name">playlist name:</label>
            <input
                name="name"
                onChange={handleChange}
                type="text" />
            <label htmlFor="image">image URL:</label>
            <input
                name="image"
                onChange={handleFile}
                type="file" />
            <canvas width={250} height={125} style={{ border: "1px solid black" }}/>
            <input type="submit" value="Add" />
        </form>
    )
}
export default AddAlbum;