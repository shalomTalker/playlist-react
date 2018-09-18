import React, { Component } from 'react'

class EditAlbum extends Component {
    constructor() {
        super()
        this.inputName = React.createRef();
    }
    componentDidMount() {
        console.log(this.inputName.current)
        this.inputName.current.addEventListener('load',(e)=>console.log(e))
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image
        img.onload = () => {
            this.props.drawImageScaled(img, ctx)
        }
    
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} encType="multipart/form-data">
                <h2>Edit your album :</h2>
                <label htmlFor="name">playlist name:</label>
                <input
                    ref={this.inputName}
                    defaultValue={this.props.playlistObj.name}
                    name="name"
                    onChange={(e)=>this.props.handleChange(e)}
                    type="text" />
                <label htmlFor="image">image URL:</label>
                <input
                ref="inputImage"
                    name="image"
                    onChange={(e)=>this.props.handleFile(e)}
                    type="file" />
                <canvas ref="canvas" width={250} height={125} style={{ border: "1px solid black" }}/>
                <img ref="image" hidden="true" src={this.props.playlistObj.image} alt={this.props.playlistObj.name + " image"} />
                
                {/* <div id="fields_songs">
                <fieldset data-key={index} key={index} onChange={handleChange}>
                    <label htmlFor="url" > Song Url:</label>
                    <input
                        name="url"
                        type="text" />
                    <label htmlFor="name">Song name:</label>
                    <input
                        name="name"
                        type="text" />
                    <button onClick={(e) => handleRemoveField(numOfFields, e)} className="btn btn-default"><i className="fas fa-times-circle"></i></button>
                </fieldset>
            </div> */}
                <input type="submit" value="Edit" />
            </form>
        )
    }
}

// const EditPglaylist = ({ handleSubmit, handleChange, handleFile, playlistObj, drawImageScaled }) => {

export default EditAlbum;