import react from 'react';

const CommentDetail = () => {
  return (
     <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Mark
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00pm</span>
          </div>
          <div className="text">
            Insert post here
          </div>
        </div>
      </div> 
  );
};