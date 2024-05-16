import { GoogleOutlined } from "@ant-design/icons"
import { Button, Table } from "antd"
import { Link } from "react-router-dom"
import "./index.scss"

function Home() {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
  return (
    <div >
        <div className="nav">
        <div>
        <Button type="primary">Add Student</Button>
        </div>
        <div className="gIcon">
        <Link to={"/google"}>
        <GoogleOutlined />
        </Link>
        </div>
        </div>
        
        <Table dataSource={dataSource} columns={columns} />;   
    </div>
    
  )
}

export default Home