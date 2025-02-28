// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
  </nav>
);

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>
      Go to <Link to="/about">About</Link> or <Link to="/contact">Contact</Link>
    </p>
  </div>
);

const About = () => (
  <div>
    <h1>About Page</h1>
    <p>
      Go to <Link to="/">Home</Link> or <Link to="/contact">Contact</Link>
    </p>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact Page</h1>
    <p>
      Go to <Link to="/">Home</Link> or <Link to="/about">About</Link>
    </p>
  </div>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;

