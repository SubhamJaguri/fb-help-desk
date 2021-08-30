import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import CurrentUser from './CurrentUser';
import CustomerDetails from './CustomerDetails';

const { Header, Content, Footer, Sider } = Layout;

interface RightSideBarProps {}

const RightSideBar: React.FC<RightSideBarProps> = ({}) => {
  return (
    <Sider
      style={{
        background: '#F0F2F9',
        width: 500,
        border: '2px solid #F0F2F9',
      }}
    >
      <CurrentUser />
      <CustomerDetails />
    </Sider>
  );
};

export default RightSideBar;
