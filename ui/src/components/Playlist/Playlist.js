import React, { Component } from 'react';

import './Playlist.css';
const Playlist = ({list,onOpen}) => {
    
    console.log("playlist rendering")
    return (
        <div className = "container">
            <div className="row">
                {
                    list.map((oneEl, index)=>{
                        return (
                            <div
                                key = {index}
                                className="playlist col-lg-3 col-md-5 col-sm-7">
                                <h3 className="playlist-name">{oneEl.name}</h3>
                                <img
                                    height="100" width="100"
                                    className="playlist-image"
                                    src={oneEl.image} alt={oneEl.name} />
                                <button
                                    onClick={ () => {onOpen(oneEl.songs)} }
                                    className="playlist-play-btn btn btn-default">
                                    <i className="fas fa-play"></i>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Playlist;
