import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Mark" timeAgo="Today at 4:00PM"/>
      <CommentDetail author="Andrew" timeAgo="Today at 6:00PM"/>
      <CommentDetail author="Annie" timeAgo="Today at 8:00PM"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));