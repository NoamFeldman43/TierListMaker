import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [posts, setPosts] = useState([]); // Array of posts
  const [page, setPage] = useState(1); // Current page number
  const [hasMore, setHasMore] = useState(true); // To check if more posts are available
  const [loading, setLoading] = useState(false); // Loading state


  const fetchPosts = async () => {
    if (loading || !hasMore) return; // Avoid fetching if already loading or if no more posts
  
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/tierlists?page=${page}&limit=5`); // Fetch posts in pages
      const newPosts = response.data;
  
      if (newPosts.length === 0) {
        setHasMore(false); // No more posts to load, stop the scroll
      } else {
        setPosts((prevPosts) => {
          // Append only the posts that are not already in the state (prevent duplicates)
          const uniqueNewPosts = newPosts.filter(
            (newPost) => !prevPosts.some((prevPost) => prevPost._id === newPost._id)
          );
          return [...prevPosts, ...uniqueNewPosts]; // Add new unique posts
        });
        setPage((prevPage) => prevPage + 1); // Increment the page number for the next fetch
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };
  
  //useEffect(() => {
  //  fetchPosts(); // Fetch initial posts
//  }, []); // Make sure the effect runs on component mount

  // Function to handle the like button click
  const handleLike = async (postId) => {
    try {
      // Send request to backend to increment likes
      const response = await axios.put(`http://localhost:5000/api/tierlists/${postId}/like`);

      // Update the state with the new like count
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, likes: response.data.likes } : post
        )
      );
    } catch (error) {
      console.error('Error liking the post:', error);
    }
  };

  // Detect when the user scrolls to the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50) {
        fetchPosts(); // Load more posts when near the bottom
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Fetch the initial posts when the component mounts
    fetchPosts();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div key={post._id} className="post">
          <h2 className="tier-title">Tier List</h2>
          {Object.keys(post.tiers).map((tier) => (
            <div key={tier} className={`tier ${tier}-tier`}>
              <h3>{tier} Tier</h3>
              <ul className="tier-items">
                {post.tiers[tier].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="likes">
            <p>{post.likes} Likes</p>
            <button onClick={() => handleLike(post._id)}>Like</button>
          </div>
        </div>
      ))}
      {loading && <p>Loading more posts...</p>}
      {!hasMore && <p>No more posts to load</p>}
    </div>
  );
};


export default HomePage;
