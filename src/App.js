

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignIn from './Components/SignIn'
import Questions from "./Components/Questions"
import Home from "./Components/Home";
import SportQuestions from "./Components/SportQuestions";
import About from "./Components/about";
import brain from "./images/brains-home-page.png"
import "./App.css"




    export default function App() {
      return (
        <Router>
            <nav>
              <div className = "navbar">
                <p id= "quiz-name">Ultimate-Quiz</p> 
                <ul className= "navbar-list">
                    <li><a href="/" id = "navhover">Home</a></li>
                    <li><a href="/signin" id = "navhover">Sign-In</a></li>
                    <li><a href="/about" id = "navhover">About</a></li>
                </ul>
              </div>
            </nav>
            <Routes>
              <Route path="/signin" element = {<SignIn/>} />
              <Route path="/questions" element = {<Questions/>}/>
              <Route path="/" element = {<Home/>}/>
              <Route path="/sportquestions" element = {<SportQuestions/>}/>
              <Route path="/about" element = {<About/>}/>


            
            </Routes>
          
        </Router>
      );
    }


/*<img src= {brain} id = "brainimgnav"></img> */