import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddAlbum from './AddAlbum'
import AddSongs from './AddSongs'
import { changeForm, closeDialog } from '../../actions/dialogActions';
import { getAlbumName, getAlbumImage, getAlbumSongs } from '../../actions/formActions';




class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        switch (this.props.typeForm) {
            case 'addAlbum':
                this.props.changeForm()
                break;
            case 'addSongs':
                let formData = new FormData();
                formData.append('name', this.props.name)
                formData.append('image', this.props.image)
                setTimeout(() => {

                    fetch('http://localhost:5000/playlist_addAlbum', {
                        method: "POST",
                        body: formData,
                        mode: "cors"
                    }).then(response => {
                        return response.text()
                    }).then(id => {
                        return fetch(`http://localhost:5000/playlist_addAlbum/${id}`, {
                            method: "POST",
                            body: JSON.stringify(this.props.songs),
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json; charset=utf-8",
                            }
                        }).then(response => {
                            this.props.closeDialog()
                            return response.json()
                        }).then(data => {
                        }).catch(err => {
                            (err) &&
                                console.log("request failed", err)
                        })
                    })
                }, 1000);
                break;
        }
    }
    collectValues = (e) => {
        const fieldsArr = Array.from(e.target.parentNode.parentNode.childNodes)
        fieldsArr.shift()
        fieldsArr.pop()
        let arr = []
        fieldsArr.map(field => {
            let obj = {};
            Array.from(field.childNodes).map(input => {
                if (input.name && input.value) {
                    obj[input.name] = input.value
                }
            })
            obj.id = field.getAttribute('data-key')
            if (Object.keys(obj).length !== 0) {
                arr = [...arr, obj]

            }
        })
        return arr
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
        switch (this.props.typeForm) {
            case 'addAlbum':
                this.props.getAlbumName(e.target.value)

                break;
            case 'addSongs':
                let arrSongs = this.collectValues(e)
                this.props.getAlbumSongs(arrSongs)
                break;
        }
    }

    handleFile = (e) => {
        const reader = new FileReader();
        const input = e.target;
        reader.onload = (upload) => {
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
        this.props.getAlbumImage(input.files[0])

    }

    render = () => {
        let currentForm;
        switch (this.props.typeForm) {
            case 'addAlbum':
                currentForm =
                    <AddAlbum
                        handleFile={this.handleFile}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange} />

                break;
            case 'addSongs':
                currentForm =
                    <AddSongs
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange} />
                break;

            default:
                break;
        }
        return (
            <div>
                {currentForm}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    typeForm: state.dialog.typeForm,
    image: state.form.albumImage,
    name: state.form.albumName,
    songs: state.form.albumSongs
})



export default connect(
    mapStateToProps,
    {
        changeForm,
        getAlbumName,
        getAlbumImage,
        getAlbumSongs,
        closeDialog
    }
)(Form);
