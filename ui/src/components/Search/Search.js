import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchPlaylist } from '../../actions/playlistActions';

class Search extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search"><i className="fas fa-search"></i></label>
        <input type="text" name="search" id="searchInput" onChange={(e) => this.props.searchPlaylist(e)} />    
      </div>
    )
  }
}

Search.propTypes = {
  searchPlaylist: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    playlists: state.playlists.playlists
})


export default connect(mapStateToProps, { searchPlaylist })(Search);