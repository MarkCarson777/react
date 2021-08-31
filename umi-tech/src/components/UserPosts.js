import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import './App.css';

class UserPosts extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Link to="/">
          <button>
            GO BACK
          </button>
        </Link>
        <h2>Posts by {this.props.user.name}</h2>
        <div className="user-card">
          <p>{this.props.user.name}</p>
          <p>{this.props.user.email}</p>
        </div>
        <PostList userId={this.props.user.id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchUsers, fetchPosts })(UserPosts);