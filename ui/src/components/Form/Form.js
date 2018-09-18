import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import AddAlbum from './AddAlbum'
import AddSongs from './AddSongs'
import EditAlbum from './EditAlbum'
import EditSongs from './EditSongs'
import VerifyDelete from './VerifyDelete'
import { changeDialog, closeDialog } from '../../actions/dialogActions';
import { fetchPlaylist } from '../../actions/playlistActions';
import {
    getAlbumName,
    getAlbumImage,
    getAlbumSongs,
    addSongField,
    removeSongField
} from '../../actions/formActions';




class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        switch (this.props.typeDialog) {
            case 'addAlbum':
                this.props.changeDialog('addSongs')
                break;
            case 'editAlbum':
                console.log(e.target.querySelector('[name=image]').files[0]);
            this.props.getAlbumName(e.target.querySelector('[name=name]').value)
            this.props.getAlbumImage(e.target.querySelector('[name=image]'))
            this.props.changeDialog('editSongs')
                break;
            case 'addSongs':
                let addDataObj = new FormData();
                addDataObj.append('name', this.props.name)
                addDataObj.append('image', this.props.image)
                setTimeout(() => {

                    fetch('http://localhost:5000/playlist/addAlbum', {
                        method: "POST",
                        body: addDataObj,
                        mode: "cors",
                        // headers: {
                        //     "Content-Type": "multipart/form-data;",
                        // }
                    }).then(response => {
                        return response.text()
                    }).then(id => {
                        return fetch(`http://localhost:5000/playlist/addAlbum/${id}`, {
                            method: "POST",
                            body: JSON.stringify(this.props.songs),
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json",
                            }
                        }).then(response => {
                            console.log(response)
                            this.props.fetchPlaylist()
                            this.props.closeDialog()
                            return response.text()
                        }).then(data => {
                            console.log(data)
                        }).catch(err => {
                            if (err) console.log("request failed", err)
                        })
                    })
                }, 1000);
                break;
            case 'editSongs':
                let editDataObj = new FormData();
                editDataObj.append('name', this.props.name)
                editDataObj.append('image', this.props.image)
                setTimeout(() => {
                    fetch('http://localhost:5000/playlist/editAlbum', {
                        method: "PUT",
                        body: editDataObj,
                        mode: "cors",
                        // headers: {
                        //     "Content-Type": "multipart/form-data;",
                        // }
                    }).then(response => {
                        return response.text()
                    }).then(id => {
                        return fetch(`http://localhost:5000/playlist/editAlbum/${id}`, {
                            method: "PUT",
                            body: JSON.stringify(this.props.songs),
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json",
                            }
                        }).then(response => {
                            console.log(response)
                            this.props.fetchPlaylist()
                            this.props.closeDialog()
                            return response.text()
                        }).then(data => {
                            console.log(data)
                        }).catch(err => {
                            if (err) console.log("request failed", err)
                        })
                    })
                }, 1000);
                break;
            }
        }
        collectValues = (e) => {
            const fieldsArr = Array.from(e.target.parentNode.parentNode.childNodes)
            console.log(fieldsArr);
            let arr = []
            fieldsArr.map(field => {
                let obj = {};
                Array.from(field.childNodes).map(input => {
                    if (input.name && input.value) {
                        return obj[input.name] = input.value

                    }
                })
                obj.id = field.getAttribute('data-key')
                if (Object.keys(obj).length !== 0) {
                    return arr = [...arr, obj]

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
            console.log('object')
            switch (this.props.typeDialog) {
                case 'addAlbum' || 'editAlbum':
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
        addField = (numOfFields, e) => {
            e.preventDefault()
            this.props.addSongField(numOfFields)
        }
        removeField = (numOfFields, e) => {
            e.preventDefault()
            this.props.removeSongField(numOfFields)
        }
        deletePlaylist = (id, e) => {
            e.preventDefault()
            console.log(id);
            fetch(`http://localhost:5000/playlist/${id}`, { method: 'DELETE' })
                .then(res => {
                    console.log('Deleted:', res)
                    return res.text()
                })
                .then(data => {
                    console.log('Deleted:', data)
                    this.props.fetchPlaylist()
                    this.props.closeDialog()
                })
                .catch(err => console.error(err))
        }


        render = () => {
            let currentForm;
            switch (this.props.typeDialog) {
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
                            handleChange={this.handleChange}
                            addField={this.addField}
                            removeField={this.removeField}
                            numOfFields={this.props.numOfFields} />
                    break;
                    case 'editAlbum':
                    currentForm =
                        <EditAlbum
                            drawImageScaled={this.drawImageScaled}
                            playlistObj={this.props.playlistObj}
                            handleFile={this.handleFile}
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange} />
                    break;
                    // case 'editSongs':
                    //     currentForm =
                    //         <EditSongs
                    //             playlistObj={this.props.playlistObj}
                    //             handleSubmit={this.handleSubmit}
                    //             handleChange={this.handleChange}
                    //             addField={this.addField}
                    //             removeSongs={this.removeSongs} />
                    //     break;
                    case 'verifyDelete':
                        currentForm =
                            <VerifyDelete
                                playlistObj={this.props.playlistObj}
                                onAccept={this.deletePlaylist}
                                onReject={this.props.closeDialog} />
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
    };

    const mapStateToProps = state => ({
        typeDialog: state.dialog.typeDialog,
        image: state.form.albumImage,
        name: state.form.albumName,
        songs: state.form.albumSongs,
        numOfFields: state.form.numOfFields,
        playlistObj: state.form.playlistObj
    });



    export default connect(
        mapStateToProps,
        {
            changeDialog,
            getAlbumName,
            getAlbumImage,
            getAlbumSongs,
            closeDialog,
            addSongField,
            removeSongField,
            fetchPlaylist
        })(Form);

