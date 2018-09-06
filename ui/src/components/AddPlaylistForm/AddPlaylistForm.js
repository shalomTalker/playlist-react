import React, { Component } from 'react';

class AddPlaylistForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            albumName: "",
            albumImage: "",
            songsArray: [],
            isFirstDialog: true,
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.isFirstDialog) {
            let albumImage = e.target.querySelector('input[type=file]').files[0]
            let albumName = e.target.querySelector('input[type=text]').value
            e.target.querySelector('input[type=text]').value = ""
            this.setState({
                albumName,
                albumImage,
                isFirstDialog: false
            })
        } else {
            let formData = new FormData();
            formData.append('name', this.state.albumName)
            formData.append('image', this.state.albumImage)
            formData.append('songs', this.state.songsArray)

            fetch('http://localhost:5000/playlist', {
                method: "POST",
                body: formData,
                "Content-Type": "multipart/form-data;",
            })
            .then(response => {
                console.log(response)
                return response.text()
            })
        }
    }
    drawImageScaled = (img, ctx) => {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }
    handleChange = (e) => {
        if (this.state.isFirstDialog) {
            this.setState({
                [e.target.name]: e.target.value
            })
        } else {
            const fieldsArr = Array.from(e.target.parentNode.parentNode.childNodes)
            fieldsArr.shift()
            let arr = []
            fieldsArr.map(field=>{
                let obj = {};
                Array.from(field.childNodes).map(node=>{
                    if (node.name && node.value) {
                        obj[node.name] = node.value
                        obj.songId = node.parentNode.getAttribute('data-key')
                    }
                })
                if (Object.keys(obj).length !== 0){
                    arr = [...arr, obj]
                }
            })
            this.setState({
                songsArray: arr
            })
        }
    }

    handleFile = (e) => {
        const reader = new FileReader();
        const input = e.target;
        reader.onload = (upload) => {
            this.setState({
                data_uri: upload.target.result
            });

            var img = new Image();
            img.onload = (e) => {
                let imgNode = input.parentNode.querySelector('img')
                let canvasNode = input.parentNode.querySelector('canvas')
                let context = canvasNode.getContext('2d');

                if (input.parentNode.contains(imgNode)) {
                    input.parentNode.removeChild(imgNode)
                }
                this.drawImageScaled(img, context)
            }
            img.src = reader.result
        };

        reader.readAsDataURL(input.files[0]);
    }

    render = () => {
        let currentForm

        this.state.isFirstDialog ? (
            currentForm = (
                <section>
                    <h2>create your album :</h2>
                    <label htmlFor="albumName">playlist name:</label>
                    <input
                        name="albumName"
                        onChange={this.handleChange}
                        type="text" />
                    <label htmlFor="albumImage">image URL:</label>
                    <input
                        name="albumImage"
                        onChange={this.handleFile}
                        type="file" />
                    <canvas style={{ border: "1px solid black" }}> </canvas>
                </section>
            )
        ) : (
                currentForm = (
                    <section>
                        <h2>Add your songs :</h2>
                        <fieldset data-key="1" key="1" onChange={this.handleChange}>
                            <label htmlFor="songUrl" > Song Url:</label>
                            <input
                                name="songUrl"
                                type="text" />
                            <label htmlFor="songName">Song name:</label>
                            <input
                                name="songName"
                                type="text" />
                        </fieldset>
                        <fieldset data-key="2" key="2" onChange={this.handleChange}>
                            <label htmlFor="songUrl" > Song Url:</label>
                            <input
                                name="songUrl"
                                type="text" />
                            <label htmlFor="songName">Song name:</label>
                            <input
                                name="songName"
                                type="text" />
                        </fieldset>
                        <fieldset data-key="3" key="3" onChange={this.handleChange}>
                            <label htmlFor="songUrl" > Song Url:</label>
                            <input
                                name="songUrl"
                                type="text" />
                            <label htmlFor="songName">Song name:</label>
                            <input
                                name="songName"
                                type="text" />
                        </fieldset>
                    </section>
                )
            )


        return (
            <div>

                <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                    {currentForm}
                    <input disabled={this.state.processing}
                        type="submit"
                        value="Add" />
                </form>
            </div>
        );
    }
}

export default AddPlaylistForm;