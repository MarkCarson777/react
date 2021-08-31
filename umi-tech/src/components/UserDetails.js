import React from 'react';

class UserDetails extends React.Component {
  render() {
    const user = this.props;
    console.log(user);
    return <div>{user}</div>
  }
}

export default UserDetails;