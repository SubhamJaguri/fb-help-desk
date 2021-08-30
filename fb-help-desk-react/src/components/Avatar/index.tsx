import React from 'react';

interface AvatarProps {}

const Avatar: React.FC<AvatarProps> = ({}) => {
  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
          borderRadius: '50%',
          position: 'relative',
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
        <div
          style={{
            width: 10,
            height: 10,
            position: 'absolute',
            right: 20,
            bottom: 0,
            borderRadius: '50%',
            background: '#87d068',
          }}
        />
      </div>
    </>
  );
};

export default Avatar;
