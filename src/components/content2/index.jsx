// Content2.jsx

import { Button, Form, Input, Modal, Typography, message, Upload } from "antd";
import "./index.scss";
import {
  AudioOutlined,
  SearchOutlined,
  CameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function Content2() {
  const [isOpen, setIsOpen] = useState(false);
  const props = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }
  return (
    <div className="hehe">
      <div className="input-with-icons">
        <Input
          prefix={<SearchOutlined />}
          className="input"
          suffix={
            <>
              <Link to={"/audio"}>
                <AudioOutlined className="audio-icon" />
              </Link>
              <Button onClick={handleOpenModal}>
                <CameraOutlined className="camera-icon"></CameraOutlined>
              </Button>
              <Modal
                title="Tìm kiếm bất kỳ hình ảnh nào bằng Google Lens"
                open={isOpen}
                onCancel={handleCloseModal}
              >
                <Form labelCol={{span: 24}}>
                  <Form layout="inline">
                    <Form.Item>
                      <Typography>Kéo hình ảnh vào đây hoặc</Typography>
                    </Form.Item>
                    <Form.Item>
                      <Upload {...props}>
                        <Button icon={<UploadOutlined />}>
                          Click to Upload
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Form>

                  <Form.Item className="center-or">
                    <Typography>_________________________________ Hoặc________________________________________</Typography>
                  </Form.Item>
                  <Form layout="inline">
                    <Form.Item>
                    <Input placeholder="dán liên kết hình ảnh"/>
                    </Form.Item>
                    <Form.Item>
                    <Button>Tìm kiếm</Button>
                    </Form.Item>
                  </Form>
                </Form>
              </Modal>
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
