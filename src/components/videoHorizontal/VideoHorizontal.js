import React from "react";
import "./_videoHorizontal.scss";

import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillEye } from "react-icons/ai";
// import request from "../../api";
import { Col, Row } from "react-bootstrap";

const VideoHorizontal = () => {

    const seconds = moment.duration('100').asSeconds()
    const _duration = moment.utc(seconds * 1000).format("mm:ss")

  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center">
        {/* Image, video_duration */}

      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="video__top__duration">{_duration}</span>
      </Col>

        {/* title,views,date,channelNae */}

      <Col xs={6} md={8} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title">Be a full stack developer in one month</p>mb-1
        <div className="videoHorizontal__details">
            <AiFillEye /> {numeral(1000000).format("0.a")} Views •
            {moment('2021-04-09').fromNow()}
        </div>
      </Col>

      <div className="videoHorizontal__channel d-flex align-items-center my-1">
      {/* <LazyLoadImage
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          effect="blur"
        /> */}

        <p>Gilson Gangadhar</p>
      </div>
    </Row>
  );
};

export default VideoHorizontal;
