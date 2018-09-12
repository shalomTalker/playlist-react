import React, { Component } from 'react';

const AddSongs = ({ handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add your songs :</h2>
            <fieldset data-key="1" key="1" onChange={handleChange}>
                <label htmlFor="url" > Song Url:</label>
                <input
                    name="url"
                    type="text" />
                <label htmlFor="name">Song name:</label>
                <input
                    name="name"
                    type="text" />
            </fieldset>
            <fieldset data-key="2" key="2" onChange={handleChange}>
                <label htmlFor="url" > Song Url:</label>
                <input
                    name="url"
                    type="text" />
                <label htmlFor="name">Song name:</label>
                <input
                    name="name"
                    type="text" />
            </fieldset>
            <fieldset data-key="3" key="3" onChange={handleChange}>
                <label htmlFor="url" > Song Url:</label>
                <input
                    name="url"
                    type="text" />
                <label htmlFor="name">Song name:</label>
                <input
                    name="name"
                    type="text" />
            </fieldset>
            <input type="submit" value="Add" />
        </form>
    )
}
export default AddSongs;