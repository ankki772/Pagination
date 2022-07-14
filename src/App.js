import axios from 'axios';
import { useEffect, useState } from 'react';
import Posts from './Posts';
import './App.css';
import Pagination from './Pagination';
import { paginationhelper } from './paginationHelper';

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentpage = 1, setCurrentpage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5)
  const [totalPosts, setTotalPosts] = useState(null)
  const indexOfLastPost = currentpage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage + 1;
  ;
  useEffect(() => {
    getPosts();
  }, [currentpage])

  const getPosts = async () => {
    setLoading(true)
    let response = await axios.get(`http://localhost:5000?start=${indexOfFirstPost}&end=${indexOfLastPost}`)
    response && setLoading(false)
    setPosts(response.data.filteredUsers)
    setTotalPosts(response.data.length)
  }

  const paginate = (number) => {
    console.log("currpage", number);
    setCurrentpage(number)
  }

  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  var totalPages = Math.ceil((totalPosts) / postsPerPage);
  const { startPage, EndPage } = paginationhelper(totalPages, currentpage)

  return (<>
    <div className="container">
      <Posts posts={posts} loading={loading} />
    </div>
    <Pagination
      postsPerPage={postsPerPage}
      currentpage={currentpage}
      totalPosts={totalPosts}
      startPage={startPage}
      EndPage={EndPage}
      paginate={paginate} />
  </>
  );
}

export default App;
