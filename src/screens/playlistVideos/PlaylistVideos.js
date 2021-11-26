import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  deletePlaylistVideo,
  getPlaylist,
  getPlaylistVideos,
  updatePlaylist,
} from "../../redux/actions/videos.action";

import "./playlistVideos.scss";

const PlaylistVideos = () => {
  const [currentPlaylist, setCurrentPlaylist] = useState({});
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();
  const { query } = useParams();

  const { playlists } = useSelector((state) => state.playlist);
  const { playlistVideos } = useSelector((state) => state.playlistVideos);

  // console.log("playlist_component", playlists);
  console.log(playlistVideos, "playlistVideos");

  useEffect(() => {
    const myPlaylist = playlists.find((playlist) => playlist.id == query);
    setCurrentPlaylist(myPlaylist);
  });

  console.log(currentPlaylist, "currentPlaylist");

  useEffect(() => {
    dispatch(getPlaylist());
    dispatch(getPlaylistVideos(query));
  }, [dispatch]);

  function MyVerticallyCenteredModal(props) {
    const initialValues = { title: "", description: "" };
    const history = useHistory();
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };

    const redirectToPlaylist = () => {
      return history.push("/feed/playlist");
    };

    const handlePlaylistUpdate = (
      id,
      title,
      description,
      closeModal,
      redirectToPlaylist
    ) => {
      dispatch(
        updatePlaylist(id, title, description, closeModal, redirectToPlaylist)
      );
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      handlePlaylistUpdate(
        props.playlistId,
        formValues.title,
        formValues.description,
        props.onHide,
        redirectToPlaylist
      );
    };

    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.onHide}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Playlist
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Enter new title"
              value={formValues.title}
              onChange={handleChange}
              className="modal-input-field"
            />
            <br />
            <br />
            <textarea
              name="description"
              placeholder="Enter new description"
              value={formValues.description}
              onChange={handleChange}
              className="modal-input-field"
            ></textarea>
            <br />
            <Button type="submit" variant="primary" style={{marginTop: "20px"}}>
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div className="playlistVideos">
      {currentPlaylist?.hasOwnProperty("snippet") && (
        <div className="playlistVideos__card">
          <>
            <img src={currentPlaylist?.snippet?.thumbnails?.medium?.url} />
            <div className="playlistVideos__cardDetails">
              <h3>{currentPlaylist?.snippet?.localized?.title}</h3>
              <h6>
                Created on :{" "}
                {currentPlaylist?.snippet?.publishedAt.slice(0, 10)}
              </h6>
              <p>{currentPlaylist?.snippet?.localized?.description}</p>
              <div className="playlistVideos__cardButtons">
                <button onClick={() => setModalShow(true)}>Update</button>
              </div>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                playlistId={query}
              />
            </div>
          </>
        </div>
      )}

      {playlistVideos?.length > 0 && (
        <div className="playlistVideos__Lists">
          {playlistVideos?.map((playlistVideo) => (
            <div className="playlistVideos__videoCard">
              <img src={playlistVideo?.snippet?.thumbnails?.default.url} />
              <div className="playlistVideos__videoDetails">
                <h5>{playlistVideo?.snippet?.title}</h5>
                <p>{playlistVideo?.snippet?.videoOwnerChannelTitle}</p>
                <button
                  onClick={() =>
                    dispatch(deletePlaylistVideo(playlistVideo?.id, query))
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaylistVideos;
