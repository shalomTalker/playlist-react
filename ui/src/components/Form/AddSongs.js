import React, { Component } from 'react';

const AddSongs = ({ handleChange, handleSubmit, addField, numOfFields, removeField }) => {
    let arr = []
    if (numOfFields !== 0) {

        for (let index = 1; index <= numOfFields; index++) {
            const element =
                <fieldset data-key={index} key={index} onChange={handleChange}>
                    <label htmlFor="url" > Song Url:</label>
                    <input
                        name="url"
                        type="text" />
                    <label htmlFor="name">Song name:</label>
                    <input
                        name="name"
                        type="text" />
                    <button onClick={(e) => removeField(numOfFields, e)} className="btn btn-default"><i className="fas fa-times-circle"></i></button>
                </fieldset>
            arr.push(element)
            numOfFields+1
        }
    } else {
        arr = <div>no fields please add one field minimum</div>
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add your songs :</h2>
            <div id="fields_songs">
                {arr}

            </div>
            <button
                onClick={(e) => addField(numOfFields, e)}
                type="button"><i className="far fa-plus-square"></i>Add new field</button>
            <input type="submit" value="Add" />
        </form>
    )
}
export default AddSongs;