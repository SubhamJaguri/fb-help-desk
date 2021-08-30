import React from 'react';
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import ChatSidebarItem from '../ChatSidebarItem';
import { MessageList } from 'react-chat-elements';
import RightSideBar from '../RightSideBar';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
interface ChatWindowProps {}

const ChatWindow: React.FC<ChatWindowProps> = ({}) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout>
        <Sider
          style={{ background: '#fff' }}
          width={200}
          className='site-layout-background'
        >
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <Menu.Item key='1'>Ajay</Menu.Item>
            <Menu.Item key='2'>Ramesh</Menu.Item>
            <Menu.Item key='3'>Suresh</Menu.Item>
            <Menu.Item key='4'>John</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Layout>
            <Header style={{ background: '#fff' }}>
              <h2>Amit RG</h2>
            </Header>
            <Content
              style={{
                margin: '20px 0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <MessageList
                className='message-list'
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={[
                  {
                    position: 'right',
                    type: 'text',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                    date: new Date(),
                  },
                  {
                    position: 'left',
                    type: 'text',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                    date: new Date(),
                  },
                  {
                    position: 'right',
                    type: 'text',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                    date: new Date(),
                  },
                  {
                    position: 'left',
                    type: 'text',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                    date: new Date(),
                  },
                ]}
              />
              <div
                style={{
                  height: 50,
                  width: '80%',
                  margin: '0px auto',
                  background: 'yellow',
                  display: 'flex',
                  justifyContent: 'center',
                  borderRadius: 5,
                }}
              >
                <Input
                  style={{ borderRadius: 5 }}
                  placeholder='Message Hiten Saxena'
                />
              </div>
            </Content>
          </Layout>
          <RightSideBar />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ChatWindow;
