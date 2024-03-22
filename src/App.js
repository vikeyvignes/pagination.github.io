import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./Components/Pagination";
import Post from "./Components/Post";
import EmpDetails from "./EmpDetails";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8000/data");
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="App">
      <h1>Posts</h1>
      <Post posts={currentPosts} loading={loading} />
      {/* <EmpDetails /> */}
      <Pagination
        length={posts.length}
        postPerPage={postPerPage}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />
    </div>
  );
}

export default App;
