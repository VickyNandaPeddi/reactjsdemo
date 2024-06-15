import logo from './logo.svg';
import './App.css';
import Navbar from './Compoenent/Navbar';
import Home from './Compoenent/Home';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Adduser from './Compoenent/Adduser';
import {LoginComponent} from "./Compoenent/LoginComponent";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>

            <Router>
                <Routes>
                    <Route exact path='/' Component={LoginComponent}></Route>
                    <Route exact path='/home' Component={Home}></Route>
                    <Route exact path='/adduser' Component={Adduser}></Route>
                </Routes>
                <br/>
                {/* <Home></Home> */}

            </Router>
        </div>
    );
}

export default App;
