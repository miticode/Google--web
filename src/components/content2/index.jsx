// Content2.jsx

import {  Input } from "antd";
import "./index.scss";
import { AudioOutlined, SearchOutlined, CameraOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Content2() {
  return (
    <div className="hehe">
        <div className="input-with-icons">
        <Input
        prefix={<SearchOutlined />}
        className="input"
        suffix={
          <>
            <AudioOutlined className="audio-icon" />
            <CameraOutlined className="camera-icon" />
          </>
        }
      />
        </div>
      
      <div className="under-search">
        <Link to={"/timtrengg"}>Tìm trên Google</Link>
         <Link to={"/xem"}> Xem trang đầu tiên tìm được</Link>
        
      </div>
    </div>
  );
}

export default Content2;
