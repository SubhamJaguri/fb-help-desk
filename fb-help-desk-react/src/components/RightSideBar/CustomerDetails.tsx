import React from 'react';

interface CustomerDetailsProps {}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({}) => {
  return (
    <div style={{ margin: 10, background: '#fff', padding: 10 }}>
      <h3>Customer Details</h3>
      <p>Email : hiten@richpanel.com</p>
      <p>First Name : Hiten</p>
      <p>Last Name: Saxena</p>
    </div>
  );
};

export default CustomerDetails;
