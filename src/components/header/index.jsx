import { AppstoreOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import "./index.scss"
function Header() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <Button type="primary" danger>
            Back to list Student
          </Button>
        </Link>
      </div>
      <div className="header__right">
        <Link to={"/gmail"}>Gmail</Link>
        <Link to={"/hinhanh"}>Hình ảnh</Link>
        <Link to={"/list"}><AppstoreOutlined className="listIcon" /></Link>
        <Link to={"/ava"}> <Avatar className="avaIcon" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/426570757_1077978820090378_1845703893674050824_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WNvxpKhrNF8Q7kNvgEfM0Z6&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBTQzo7USn5K6dd32rfzFDDxM4nlxiJpgcyMXyjO7yYbA&oe=664B59F4" /></Link>
       
      </div>
    </div>
  );
}

export default Header;
