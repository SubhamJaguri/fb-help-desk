import { Layout, Menu } from 'antd';
import ChatWindow from '../../components/ChatWindow';
import Sidebar from '../../components/Sidebar';

const { Header, Sider, Content } = Layout;

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Sidebar />
        <Layout className='site-layout'>
          <Content className='site-layout-background'>
            <ChatWindow />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
