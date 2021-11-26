import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePlaylist, getPlaylist } from "../../redux/actions/videos.action";

import "./playlist.scss";

const Playlist = () => {
  const { playlists } = useSelector((state) => state.playlist);
  const history = useHistory()

  console.log("playlist_component", playlists);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlaylist());
  }, [dispatch]);

  const handleChange = (id) => {
    history.push(`/feed/playlistVideos/${id}`)
  }

  const handlePlaylistDelete = (id) => {
    dispatch(deletePlaylist(id))
  }

  // useEffect((id) => {
  //     dispatch(getPlaylistVideos(id))
  // }, [dispatch, id])

  return (
    <div className="playlist">
      <div className="playlist__header">
        <h3>Playlist</h3>
      </div>
      <div className="playlist__lists">
        {playlists?.map((playlist) => (
          <div className="playlist__lists__card" key={playlist.id}>
            <img src={playlist.snippet.thumbnails.medium.url} onClick={() => handleChange(playlist.id)} />
            <div className="playlist__cardDetails">
              <h5>{playlist.snippet.localized.title}</h5>
              <button onClick={() => handlePlaylistDelete(playlist.id)}>Delete</button>
              {/* <p>{playlist.snippet.localized.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
