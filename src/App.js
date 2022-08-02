import                         './App.css';
// import Card    from './components/Card';
import   Home               from './components/pages/Home';
import   About              from './components/pages/About';
import   MyStore            from './components/pages/MyStore';
import   Login              from './components/pages/Login';


import {
         BrowserRouter as Router,
         Routes, Route, Link
}                           from 'react-router-dom';



const App = () => {


  const padding  = {

    padding: 5
  }

  return (
    <>

    <Router>
      <div>
        <Link style={padding} to="/">Home</Link>
        <Link style={padding} to="about/">About</Link>
        <Link style={padding} to="myStore/">My Store</Link>
        <Link style={padding} to="/login">Login</Link>
      </div>

      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/login" element={< Login/>}/>
        <Route path="/about" element={< About/>}/>
        <Route path="/myStore" element={< MyStore/>}/>
      </Routes>
    </Router>
    </>
      
    )
}

export default App;
