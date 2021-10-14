import React from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from 'react-show-more-text'

const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(100000).format("0.a")} Views •
            {moment("2020-06-06").fromNow()}
          </span>
          <div>
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(10000).format("0.a")}
            </span>

            <span className="mr-3">
              <MdThumbDown size={26} /> {numeral(10000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center py-3 my-2">
        <div className="d-flex">
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            alt=""
            className="rounded=circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>Gilson Gangadhar</span>
            <span>{numeral(10000).format("0.a")} Subscribers</span>
          </div>
        </div>

        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
        lines={3}
        more="Show More"
        less="Show Less"
        anchorClass="showMoreText"
        expanded={false}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugiat
        facilis ex culpa itaque fugit molestiae temporibus voluptas doloribus
        quibusdam in error veritatis, praesentium iste accusamus molestias,
        laudantium rem dolor provident? Consectetur vel, officiis vero aperiam
        repellendus omnis eligendi sequi accusantium incidunt! Veritatis,
        consequatur iure similique ratione ab repudiandae quidem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugiat
        facilis ex culpa itaque fugit molestiae temporibus voluptas doloribus
        quibusdam in error veritatis, praesentium iste accusamus molestias,
        laudantium rem dolor provident? Consectetur vel, officiis vero aperiam
        repellendus omnis eligendi sequi accusantium incidunt! Veritatis,
        consequatur iure similique ratione ab repudiandae quidem!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugiat
        facilis ex culpa itaque fugit molestiae temporibus voluptas doloribus
        quibusdam in error veritatis, praesentium iste accusamus molestias,
        laudantium rem dolor provident? Consectetur vel, officiis vero aperiam
        repellendus omnis eligendi sequi accusantium incidunt! Veritatis,
        consequatur iure similique ratione ab repudiandae quidem!
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
