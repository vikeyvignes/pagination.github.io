import React from "react";

const Post = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {posts.map((data, index) => (
        <div className="list" key={index}>
          <h4>{data.title}</h4>
          <small>
            {" "}
            <p>{data.body}</p>
          </small>
        </div>
      ))}
    </>
  );
};

export default Post;
