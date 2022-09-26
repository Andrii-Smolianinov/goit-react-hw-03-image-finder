
import Posts from 'components/API/Post';
import PostsSearch from 'components/API/PostSearch';


function App() {
  return (
    <div className="App">
      <PostsSearch />
      <Posts />      
    </div>
  );
}

export default App;