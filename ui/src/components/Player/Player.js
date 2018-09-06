import React, { Component } from 'react'
export default class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSong: 0
        }
    }
    componentDidMount = () => {
       this.player = document.querySelector('audio')
        this.player.addEventListener('ended', this.playNextHandler)
    }
    playNextHandler = (e) => {
        let index = e.target.getAttribute("data-songid");
        ++index
        if (index < this.props.songs.length) {
            this.setState({
                currentSong: index
            })
            this.player.setAttribute("data-songid", index)
            this.player.setAttribute("src", this.props.songs[index].url)
        }
    }
    playClickedSongHandler = (e, url) => {
        let index = e.target.getAttribute("data-songid");
        console.log(index)
        this.player.setAttribute("data-songid", index)
        this.setState({
            currentSong: index
        })

        this.player.setAttribute("src", url )
    }
    
  render() {
    return (
      <div>
          <audio 
          src={this.props.songs[0].url} 
          autoPlay
          controls
          muted 
          data-songid = "0"
          ></audio>
            <ul>
                {
                    this.props.songs.map((song, index) => {
                        return(
                        <li 
                        data-songid={index}
                        key={index}
                        onClick={(e) => { this.playClickedSongHandler(e, song.url)}}
                        className="track">{song.name}</li>
                        )
                    })
                }
            </ul>
      </div>
    )
  }
}
