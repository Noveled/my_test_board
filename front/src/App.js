import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PostList from './components/PostList';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* nav */}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>
          </nav>

          {/* routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
