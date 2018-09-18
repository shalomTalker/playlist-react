import React, { Component } from 'react';
const VerifyDelete = ({ onAccept, onReject, playlistObj }) => {
    return (
        <div>
            <form>
                <p>Are you sure delete this playlist?</p>
                <div
                    key={playlistObj._id}
                    data-id={playlistObj._id}
                    className="playlist col-lg-3 col-md-5 col-sm-7">
                    <h3 className="playlist-name">{playlistObj.name}</h3>
                    <img
                        height="100" width="100"
                        className="playlist-image"
                        src={playlistObj.image} alt={playlistObj.name} />
                </div>
                <button
                    onClick={(e) => onAccept(playlistObj._id, e)}
                ><i className="fas fa-check"></i></button>
                <button
                    onClick={onReject}
                ><i className="fas fa-times"></i></button>
            </form>
        </div>
    );
}
export default VerifyDelete;