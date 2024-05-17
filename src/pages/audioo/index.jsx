import { AudioOutlined } from "@ant-design/icons"
import { Typography } from "antd"
import "./index.scss"
function Audio() {
  return (
    <div className="manhinhden">
      <Typography className="speak">Speak Now</Typography>
      <AudioOutlined />
    </div>
  )
}

export default Audio