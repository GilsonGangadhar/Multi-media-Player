import React, { useState, useEffect } from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import {
  getChannelDetails,
  checkSubscriptionStatus,
} from "../../redux/actions/channel.action";

import {
  getPlaylist,
  insertPlaylistVideo,
} from "../../redux/actions/videos.action";


const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();
  const { playlists } = useSelector((state) => state.playlist);

  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);
  const subscriptionStatus = useSelector(
    (state) => state.channelDetails.subscriptionStatus
  );

  console.log(videoId, "videometadata video id");

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  useEffect(() => {
    dispatch(getPlaylist());
  }, [dispatch]);

  function MyVerticallyCenteredModal(props) {

    const handleOnChange = (e) => {
      const playlistId = e.target.value;
      dispatch(insertPlaylistVideo(playlistId, videoId, props.onHide));
    };

    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.onHide}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add To Playlist
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {playlists.length > 0 &&
            playlists?.map((item) => {
              return (
                <div
                  onChange={handleOnChange}
                  className="d-flex justify-content-start align-items-center py-2"
                >
                  <input
                    type="radio"
                    id={item?.snippet?.localized?.title}
                    value={item?.id}
                    name={item?.snippet?.localized?.title}
                  />{" "}
                  <p
                    style={{ color: "black", margin: "0", paddingLeft: "1rem" }}
                  >
                    {item?.snippet?.localized?.title}
                  </p>
                </div>
              );
            })}
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(viewCount).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </span>
          <div>
            <span className="mr-3 videoMetaData__thumbsDetails">
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>

            <span style={{ paddingLeft: "10px" }} className="mr-3 videoMetaData__thumbsDetails">
              <MdThumbDown size={26} /> {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center py-3 my-2">
        <div className="d-flex">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt=""
            className="rounded-circle mr-3"
          />
          <div style={{ marginLeft: "10px" }} className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>
              {numeral(channelStatistics?.subscriberCount).format("0.a")}{" "}
              Subscribers
            </span>
          </div>
        </div>
        <div>
          <button
            style={{ float: "right" }}
            className={`btn border-0 p-2 m-2 btn-gray`}
            onClick={() => setModalShow(true)}
          >
            {"Add to Playlist"}
          </button>
          <button
            className={`btn border-0 p-2 m-2 videoMetaData__subscribersDetails ${
              subscriptionStatus && "btn-gray"
            }`}
          >
            {subscriptionStatus ? "Subscribed" : "Subscribe"}
          </button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="Show More"
          less="Show Less"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
