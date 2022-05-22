
import './App.css';
import Navbars from './components/Navbar';
import Card    from './components/Card';
import Home    from './components/pages/Home';
import About   from './components/pages/About';
import SignUp  from './components/pages/SignUp';
import MyStore from './components/pages/MyStore';


import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

const App = () => {

  const padding  = {

    padding: 5
  }

  return (
    <>

    <Router>
      <div>
        <Link style={padding} to="/">Home</Link>
        <Link style={padding} to="/signUp">Sign-Up</Link>
        <Link style={padding} to="about/">About</Link>
        <Link style={padding} to="myStore/">My Store</Link>
      </div>

      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/signUp" element={< SignUp/>}/>
        <Route path="/about" element={< About/>}/>
        <Route path="/myStore" element={< MyStore/>}/>
      </Routes>
    </Router>
      <Navbars/>
      <Card/>
    
    </>
      
    )
}

export default App;
