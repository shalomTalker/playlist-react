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
  // constructor(props){
  //   super(props)
  //   this.state = {
  // //     playlists: [],
  //     isOpen: false,
  //     ariaHide: false,
  // //     play: false,
  // //     songsList:[]
  //   }
  // this.mainNode = React.createRef();
  //   this.playlistService = new PlaylistService()
  //   this.listForSearch = [...this.state.playlists]
  // }
  // componentWillUpdate = () => {
  //   console.log(store.getState())

  //   this.props.fetchPlaylist()
  //   this.playlistService.setUrl("ALL");
  //   this.playlistService.getPlaylist().then(
  //     (res) => {
  //       setTimeout(() => {
  //         this.setState({
  //           playlists: res,
  //         })
  //         this.listForSearch = res
  //       }, 1000);
  //     }
  //   )
  // }
  // toggleDialogHandler = (e) => {
  //   if (!this.state.isOpen) {
  //     e.preventDefault()
  //   }
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //     ariaHide: !this.state.ariaHide
  //   })
  // }

  // openPlayerHandler = (songsList) => {
  //   console.log(songsList)
  //   this.setState({
  //     play:true,
  //     songsList: songsList
  //   })
  // }

  //   deletePlaylist = (e, index) => {
  //   console.log(index);
  //     fetch(`http://localhost:5000/playlist/${index}`,{
  //       method: "DELETE"
  //     }).then(response=>{
  //       console.log(response);
  //       console.log(e.target);
  //       // document.removeChild(e.target)
  //     })
  // }

  render() {
    console.log(this.props);
    // console.log(this.props, "App rendering")
    // const DialogEl = this.props.isOpen && (
    //   <Dialog
    //   onClose={this.toggleDialogHandler}>
    //     <div id="dialog-overlay" ></div>
    //     <dialog id="dialog">
    //       <button
    //         aria-label="Close"
    //         onClick={this.toggleDialogHandler}>
    //         ✗
    //       </button>
    //       <div role="document">
    //         <AddPlaylistForm onClose={this.toggleDialogHandler}></AddPlaylistForm>
    //       </div>
    //     </dialog>
    //   </Dialog>
    // ) 


    return (

      <div className="App">
        <header aria-hidden={this.props.ariaHide} className="App-header">
          <button
            onClick={this.props.openDialog}
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
