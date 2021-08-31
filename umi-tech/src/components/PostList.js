import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.userId);
  }

  renderList() {
    const userPosts = this.props.posts.filter(post => post.userId === this.props.userId);
    const renderedList = userPosts.map(userPost => {
      return (
        <div>
          {userPost.title}
        </div>
      );
    });

    return (
      <div>
        {renderedList}
      </div>
    );
  }
  

  
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);