import { Link } from "react-router-dom"
import "./index.scss"

function Content3() {
  return (
    
    <div className="under-content2">
        <div className="concac">
        <div>Google có các thứ tiếng: </div>
        <div className="tripu">
          <Link to={"/English"}>English</Link>
          <Link to={"/Francais"}>Français</Link>
          <Link to={"/taukhia"}>繁體中文</Link>
        
        </div>
        </div>
        
       
    </div>
  )
}

export default Content3