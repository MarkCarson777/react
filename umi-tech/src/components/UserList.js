import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderList() {
    return this.props.users.map(user => {
      return (
        <div key={user.id}>
          <button>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </button>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);