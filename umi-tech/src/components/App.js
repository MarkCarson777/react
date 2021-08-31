import React from 'react';
// import PostList from './PostList';
import UserList from './UserList';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <UserList />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Root} />
      </BrowserRouter>
    </div>
  );
};

export default App;