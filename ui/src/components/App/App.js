import React, { Component } from 'react';
import { PlaylistService } from '../../services/playlist-service'

// import logo from '../../logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist';
import Search from '../Search/Search';
import Player from '../Player/Player';
import Dialog from '../Dialog/Dialog';
import AddPlaylistForm from '../AddPlaylistForm/AddPlaylistForm';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      playlist: [],
      isOpen: false,
      ariaHide: false,
      play: false,
      songsList:[]
    }
    this.mainNode = React.createRef();
    this.playlistService = new PlaylistService()
    this.listForSearch = [...this.state.playlist]
  }
  componentDidMount = () => {
    this.playlistService.setUrl("ALL");
    this.playlistService.getPlaylist().then(
      (res) => {
        setTimeout(() => {
          this.setState({
            playlist: res,
          })
          this.listForSearch = res
        }, 1000);
      }
    )
  }
  toggleDialogHandler = (e) => {
    if (!this.state.isOpen) {
      e.preventDefault()
    }
    this.setState({
      isOpen: !this.state.isOpen,
      ariaHide: !this.state.ariaHide
    })
  }
  searchPlaylistHandler = (e) => {
    let searchVal = e.target.value;
    let searchRes = this.listForSearch.filter(pl => pl.name.toLowerCase().includes(searchVal.toLowerCase()))
    this.setState({
      playlist: searchRes
    })
  }
  openPlayerHandler = (songsList) => {
    console.log(songsList)
    this.setState({
      play:true,
      songsList: songsList
    })
  }
  
  render() {
    console.log("App rendering")
    const DialogEl = this.state.isOpen && (
      <Dialog
      onClose={this.toggleDialogHandler}>
        <div id="dialog-overlay" ></div>
        <dialog id="dialog">
          <button
            aria-label="Close"
            onClick={this.toggleDialogHandler}>
            ✗
          </button>
          <div role="document">
            <AddPlaylistForm></AddPlaylistForm>
          </div>
        </dialog>
      </Dialog>
    ) 


    return (
      <div className="App">
        <header className="App-header">
          <button 
          onClick={this.toggleDialogHandler}
          type="button"><i className="far fa-plus-square"></i>add new palylist</button>
          <Search
            onSearch={this.searchPlaylistHandler}></Search>
        </header>
        <main>
          {
            (this.state.play) &&
              <Player songs={this.state.songsList}></Player>
          }
          <Playlist
          onOpen={this.openPlayerHandler} 
          list={this.state.playlist}>
          </Playlist>
        </main>
        {DialogEl}
      </div>
    );
  }
}


export default App;
