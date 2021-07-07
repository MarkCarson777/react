import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail 
        author="Mark" 
        timeAgo="Today at 4:00PM" 
        comment="Great!" 
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        author="Andrew" 
        timeAgo="Today at 6:00PM" 
        comment="Awesome!" 
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        author="Annie" 
        timeAgo="Today at 8:00PM" 
        comment="Brilliant!" 
        avatar={faker.image.avatar()} 
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));