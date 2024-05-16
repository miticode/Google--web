  import { GoogleOutlined } from "@ant-design/icons";
  import { Button, Form, Input, Modal, Select, Table } from "antd";
  import { Link } from "react-router-dom";
  import "./index.scss";
  import { useEffect, useState } from "react";
  import axios from "axios";
  import { useForm } from "antd/es/form/Form";

  function Home() {
    const [dataSource, setDataSource] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [form] = useForm();

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "MSSV",
        dataIndex: "mssv",
        key: "mssv",
      },
      {
        title: "Class",
        dataIndex: "class",
        key: "class",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
    ];
    async function fetchStudent() {
      const response = await axios.get(
        "https://6645bbb8b8925626f892ee61.mockapi.io/StudentI4"
      );
      setDataSource(response.data);
    }
    function handleShowModal() {
      setIsOpen(true);
    }
    function handleCloseModal() {
      setIsOpen(false);
    }
    useEffect(function () {
      fetchStudent();
    });
    async function handleSubmit(values) {
      console.log(values)
      const response = await axios.post("https://6645bbb8b8925626f892ee61.mockapi.io/StudentI4",values);
      setDataSource([...dataSource,values]);
      form.resetFields
      handleCloseModal();
    }
    function handleOk() {
      form.submit();
    }
    return (
      <div>
        <div className="nav">
          <div>
            <Button type="primary" danger onClick={handleShowModal}>
              Add New Student
            </Button>
          </div>
          <div className="gIcon">
            <Link to={"/google"}>
              <GoogleOutlined  />
            </Link>
          </div>
        </div>
        <Table dataSource={dataSource} columns={columns} />;
        <Modal
          open={isOpen}
          title="Add new Student"
          onCancel={handleCloseModal}
          onOk={handleOk}
        >
          <Form labelCol={{ span: 24 }} form={form} onFinish={handleSubmit}>
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="MSSV" name="mssv">
              <Input />
            </Form.Item>
            <Form.Item label="Class" name="class">
              <Select options={[
                { value:"React05", label: <span> React05 </span>},
                { value:"React06", label: <span> React06 </span>},
                { value:"React07", label: <span> React07 </span>},
                { value:"React08", label: <span> React08 </span>},
              ]}>

              </Select>
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }

  export default Home;
