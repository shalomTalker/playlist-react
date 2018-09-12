import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Player extends Component {
    componentDidUpdate = () => {
        this.player = document.querySelector('audio')
        this.player.addEventListener('ended', this.playNextHandler)
    }
    playNextHandler = (e) => {
        let index = this.props.player.songs.findIndex(song => { return song.url === e.target.getAttribute("src") });
        ++index
        if (index < this.props.player.songs.length) {
            console.log(index);
            this.player.setAttribute("src", this.props.player.songs[index].url)
        }
    }
    playClickedSongHandler = (url) => {
        this.player.setAttribute("src", url )
    }
    render() {
        return (
            (this.props.player.isOpen) &&
            <div>
                <audio
                    src={this.props.player.songs[0].url}
                    autoPlay
                    controls
                    muted
                ></audio>
                <ul>
                {
                        this.props.player.songs.map((song, index) => {
                        return(
                        <li 
                        key={index}
                        onClick={() => { this.playClickedSongHandler(song.url)}}
                        className="track">{song.name}</li>
                        )
                    })
                }
            </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    player: state.player
})


export default connect(mapStateToProps, null)(Player);

