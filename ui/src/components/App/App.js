import React, { Component } from 'react';
// import { PlaylistService } from '../../services/playlist-service';
import { connect } from 'react-redux';
import { openDialog } from '../../actions/dialogActions';

import Playlist from '../Playlist/Playlist';
import Search from '../Search/Search';
import Player from '../Player/Player';
import Dialog from '../Dialog/Dialog';
// import AddPlaylistForm from '../AddPlaylistForm/AddPlaylistForm';

import './App.css';

class App extends Component {
 

  render() {
    return (
      <div className="App">
        <header aria-hidden={this.props.ariaHide} className="App-header">
          <button
            onClick={() => this.props.openDialog('addAlbum')}
            type="button"><i className="far fa-plus-square"></i>add new palylist</button>
          <Search />
        </header>
        <main aria-hidden={this.props.ariaHide} className="container">
          <Player />
          <Playlist />
        </main>
        <Dialog />

      </div>

    );
  }
}
const mapStateToProps = state => ({
  ariaHide: state.dialog.ariaHide
})



export default connect(mapStateToProps, { openDialog })(App);
