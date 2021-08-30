import { Layout, Menu } from 'antd';
import {
  LineChartOutlined,
  MailOutlined,
  ShareAltOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import Avatar from '../Avatar';

const { Header, Sider, Content } = Layout;

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <Sider
      style={{
        backgroundColor: '#4267B2',
      }}
      trigger={null}
      collapsible
      collapsed={true}
    >
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Menu
          style={{ backgroundColor: '#4267B2' }}
          theme='light'
          mode='inline'
          defaultSelectedKeys={['2']}
        >
          <Menu.Item
            className='customclass'
            key='1'
            icon={<ShareAltOutlined style={{ color: '#fff' }} />}
          ></Menu.Item>
          <Menu.Item
            className='customclass'
            style={{ background: '#fff' }}
            key='2'
            icon={<MailOutlined style={{ color: '#4267B2' }} />}
          ></Menu.Item>
          <Menu.Item
            className='customclass'
            key='3'
            icon={<UsergroupAddOutlined style={{ color: '#fff' }} />}
          ></Menu.Item>
          <Menu.Item
            className='customclass'
            key='4'
            icon={<LineChartOutlined style={{ color: '#fff' }} />}
          ></Menu.Item>
        </Menu>

        <Avatar />
      </div>
    </Sider>
  );
};

export default Sidebar;
