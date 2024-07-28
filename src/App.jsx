import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/majors" element={<Majors />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/groups" element={<Groups />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/majors">Majors</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/groups">Groups</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <div className="Page">
      <h1>Welcome to Our School</h1>
      <p>Explore information about our students, majors, classes, and groups.</p>
    </div>
  );
}

function Students() {
  const [showVideos, setShowVideos] = useState(false);

  const toggleVideos = () => {
    setShowVideos(!showVideos);
  };

  return (
    <div className="Page">
      <h1>Students</h1>
      <button onClick={toggleVideos}>
        {showVideos ? 'Hide Videos' : 'Show Videos'}
      </button>
      {showVideos && (
        <div className="VideoGallery">
          <h2>Student Introduction Videos</h2>
          <video width="320" height="240" controls>
            <source src="https://www.example.com/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video width="320" height="240" controls>
            <source src="https://www.example.com/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

function Majors() {
  const [showVideos, setShowVideos] = useState(false);

  const toggleVideos = () => {
    setShowVideos(!showVideos);
  };

  return (
    <div className="Page">
      <h1>Majors</h1>
      <button onClick={toggleVideos}>
        {showVideos ? 'Hide Videos' : 'Show Videos'}
      </button>
      {showVideos && (
        <div className="VideoGallery">
          <h2>Majors Overview Videos</h2>
          <video width="320" height="240" controls>
            <source src="https://www.example.com/video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video width="320" height="240" controls>
            <source src="https://www.example.com/video4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

function Classes() {
  const [showVideos, setShowVideos] = useState(false);

  const toggleVideos = () => {
    setShowVideos(!showVideos);
  };

  return (
    <div className="Page">
      <h1>Classes</h1>
      <button onClick={toggleVideos}>
        {showVideos ? 'Hide Videos' : 'Show Videos'}
      </button>
      {showVideos && (
        <div className="VideoGallery">
          <h2>Class Introduction Videos</h2>
          <video width="320" height="240" controls>
            <source src="https://www.example.com/video5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video width="320" height="240" controls>
            <source src="https://www.example.com/video6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

function Groups() {
  const [showVideos, setShowVideos] = useState(false);

  const toggleVideos = () => {
    setShowVideos(!showVideos);
  };

  return (
    <div className="Page">
      <h1>Groups</h1>
      <button onClick={toggleVideos}>
        {showVideos ? 'Hide Videos' : 'Show Videos'}
      </button>
      {showVideos && (
        <div className="VideoGallery">
          <h2>Student Groups Videos</h2>
          <video width="320" height="240" controls>
            <source src="https://www.example.com/video7.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video width="320" height="240" controls>
            <source src="https://youtu.be/WHjsgUwtRgY" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>&copy; 2024 School Website. All Rights Reserved.</p>
    </footer>
  );
}

export default App;
