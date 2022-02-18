import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PostsCount from './Posts';

function App() {
  const [ allUsers, setUsers ] =useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => data.json())
      .then((users) => setUsers([...allUsers, ...users]))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users and their post count</h1>
        {
          allUsers.map((user) => (
            <div>
              { `${user.name} has `}
              <PostsCount userId={ user.id }/>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
