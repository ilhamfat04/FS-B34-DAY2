import "bootstrap/dist/css/bootstrap.min.css";

// import necessary object from react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import "pages" component here
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import Navbar from "./pages/nav"

function App() {
  return (
    // define <BrowserRouter> as parent element
    <Router>
      <div>
        <Navbar />
      </div>
      {/* code <Routes> and <Route> below, according to path and component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;