import { PhoneOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button/button';
import React from 'react';
import Avatar from '../Avatar';

interface CurrentUserProps {}

const CurrentUser: React.FC<CurrentUserProps> = ({}) => {
  return (
    <div
      style={{
        height: 300,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=100&q=100'
        style={{
          width: 50,
          height: 50,
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
      <h3>Hiten Saxena</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#87d068',
          }}
        />
        <p
          style={{
            marginLeft: 10,
            marginTop: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          online
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button icon={<PhoneOutlined />}>Call</Button>
        <Button icon={<UserOutlined />}>Profile</Button>
      </div>
    </div>
  );
};

export default CurrentUser;
