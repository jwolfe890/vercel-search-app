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
    Sammy Baugh (Samuel Adrian Baugh) was an American football quarterback, coach, and Hall of Famer, widely regarded as one of the greatest quarterbacks in NFL history. Born on March 17, 1914, in Temple, Texas, Baugh first gained national recognition as a star at Texas Christian University (TCU), where he revolutionized the passing game with his pinpoint accuracy. His standout performances led to him being drafted by the Washington Redskins in 1937, where he would play his entire 16-season career (1937–1952).
    Nicknamed "Slingin’ Sammy," Baugh was a pioneer in the development of the modern forward pass, leading the NFL in passing yards multiple times. In 1943, he had one of the most remarkable seasons in football history, leading the league in passing, punting, and interceptions as a defensive back. A two-time NFL champion (1937, 1942) and six-time First-Team All-Pro, Baugh set numerous passing records and remains one of the most influential figures in the sport.
    Beyond his playing days, Baugh transitioned into coaching, including stints at Hardin–Simmons University and in professional football. He was inducted into the Pro Football Hall of Fame in 1963 as part of its inaugural class. Sammy Baugh passed away on December 17, 2008, but his legacy endures as a transformative figure in football history.
    </p>
    <p>
      Go to <Link to="/">Home</Link> or <Link to="/contact">Contact</Link>
    </p>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact Page</h1>
    <p>
    Otto Graham was an American football quarterback who dominated the sport in the 1940s and 1950s, leading the Cleveland Browns to unprecedented success. Born on December 6, 1921, in Waukegan, Illinois, Graham was a multi-sport athlete at Northwestern University, excelling in football, basketball, and even earning All-American honors in the latter. After serving in the U.S. Navy during World War II, he joined the newly formed Cleveland Browns in 1946 under legendary coach Paul Brown.
    Graham was the driving force behind the Browns' dynasty, leading them to ten straight championship games (1946–1955) and winning seven titles—four in the All-America Football Conference (AAFC) and three in the NFL after the Browns joined in 1950. Known for his precision passing, mobility, and leadership, he finished his career with an astounding .814 winning percentage (105-17-4), the highest for a starting quarterback in NFL history. A three-time NFL MVP (1951, 1953, 1955), Graham was a pioneer of modern quarterbacking, excelling in both passing and running.
    After retiring in 1955, Graham transitioned into coaching, including a stint as head coach at the U.S. Coast Guard Academy and later as general manager of the Washington Redskins. He was inducted into the Pro Football Hall of Fame in 1965. Otto Graham passed away on December 17, 2003, but remains one of the greatest quarterbacks in football history.
    </p>
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

