import React, { Component } from "react";
import "./youtubeMain.css";

class youtubeMain extends Component {
  render() {
    return (
      <div className="main_div">
        <div className="title">
          <h1>Youtube Downloader</h1>
        </div>
        <div className="input_align">
          <input type="text" id="text_box" placeholder="Insert vaild video URL"/>
          <input type="button" value="Convert" style={{height:"45px"}}/>
        </div>
      </div>
    );
  }
}

export default youtubeMain;
