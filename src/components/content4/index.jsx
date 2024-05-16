import { Link } from "react-router-dom";
import "./index.scss";

function Content4() {
  return (
    <div className="mama">
      <div className="kaka">
        <div className="kuku">Việt Nam</div>
       
      </div>
      <hr className="divider" />
      <div className="kiki">
        
        <div className="kiki__left">
          <Link to={"/gioithieu"}>Giới thiệu</Link>
          <Link to={"/quangcao"}> quảng cáo </Link>
          <Link to={"/doanhnghiep"}> Doanh nghiệp </Link>
          <Link to={"/cachhoatdong"}> Cách hoạt động của tìm kiếm </Link>
        </div>
         
        <div className="kiki__right">
          <Link to={"/quyenriengtu"}> Quyền riêng tư </Link>
          <Link to={"/dieukhoan"}> Điều khoản </Link>
          <Link to={"/caidat"}> Cài Đặt </Link>
        </div>
      </div>
    </div>
  );
}

export default Content4;
