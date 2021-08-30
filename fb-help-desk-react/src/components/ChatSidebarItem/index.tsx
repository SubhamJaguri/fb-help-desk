import { Checkbox } from 'antd';
import React from 'react';

interface ChatSidebarItemProps {}

const ChatSidebarItem: React.FC<ChatSidebarItemProps> = ({}) => {
  return (
    <div style={{ background: '#F0F2F9', padding: '0 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <Checkbox onChange={() => {}}></Checkbox>
          <div>
            <h3>Amit R3</h3>
            <p>Facebook DM</p>
          </div>
        </div>
        <div>10 m</div>
      </div>
      <div>
        <p>Awesome Product</p>
        <p>hey there some messgae ...</p>
      </div>
    </div>
  );
};

export default ChatSidebarItem;
