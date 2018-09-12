import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlaylist } from '../../actions/playlistActions';
import { openPlayer } from '../../actions/playerActions';


class Playlist extends Component {
    componentWillMount = () => {
        this.props.fetchPlaylist();
    }
    render() {
        const playlistsItems = this.props.playlists.map(playlist => (
            <div
                key={playlist._id}
                data-id
                className="playlist col-lg-3 col-md-5 col-sm-7">
                <h3 className="playlist-name">{playlist.name}</h3>
                <img
                    height="100" width="100"
                    className="playlist-image"
                    src={playlist.image} alt={playlist.name} />
                <button
                    className="btn btn-default">
                        <i className="fas fa-edit"></i>
                </button>
                <button
                    className="btn btn-default">
                        <i className="fas fa-times-circle"></i>
                </button>
                <button
                    onClick={() => this.props.openPlayer(playlist.songs)}
                    className="btn btn-default">
                        <i className="fas fa-play"></i>
                </button>
            </div>
        ))
        return (
            <div className="row">
                {playlistsItems}
            </div>
        )
    }
}

Playlist.propTypes = {
    fetchPlaylist: PropTypes.func.isRequired,
    playlists: PropTypes.array.isRequired,
    openPlayer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    playlists: state.playlists.playlists
    
})


export default connect(mapStateToProps, { fetchPlaylist, openPlayer })(Playlist);
