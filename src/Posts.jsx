import React, { useState, useEffect } from 'react';

const PostsCount = ({ userId }) => {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${ userId }/posts`)
      .then((data) => data.json())
      .then((usersPosts) => setPosts([...posts, ...usersPosts]))
      .catch((e) => console.log(e));
  }, [ ])

  return (
    <div>{ posts.length + `posts`}</div>
  )

};

export default PostsCount;
