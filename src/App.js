import { Routes, Route, Link, Navigate } from "react-router-dom";
import {React, useState} from "react";
import SignIn from "./Components/SignIn";
import Questions from "./Components/Quizzes/CodeQuestions";
import Home from "./Components/Home";
import Movies from "./Components/Quizzes/Movies";
import SportQuestions from "./Components/Quizzes/SportQuestions";
import About from "./Components/about";
import COR from "./Components/Quizzes/COR";
import Food from "./Components/Quizzes/food";
import Animals from "./Components/Quizzes/animals";
import History from "./Components/Quizzes/Amhistory";
import Geography from "./Components/Quizzes/geography";
import "./App.css";
import Whosaidthat from "./Components/Quizzes/whosaidthat";
import Music from "./Components/Quizzes/music";
import Spongebob from "./Components/Quizzes/spongebob";
import General from "./Components/Quizzes/general";


export default function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  return (
    <>
      {isUserSignedIn ? (
        <div>
          {/* Render the content for signed-in users */}
          <div>
          <div className="navbar">
            <p id="quiz-name">Ultimate-Quiz</p>
            <ul className="navbar-list">
              <li className={isUserSignedIn ? null : "disabled"}>
                <Link to="/" id="navhover">
                  Quizzes
                </Link>
              </li>
              <li>
                <Link to="/signin" id="navhover">
                  Sign-In
                </Link>
              </li>
              <li>
                <Link to="/about" id="navhover">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <Routes>
            {/* Redirect to Sign-In if not signed in */}
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn setIsUserSignedIn={setIsUserSignedIn} isUserSignedIn={isUserSignedIn}/>} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/sportquestions" element={<SportQuestions />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cor" element={<COR />} />
            <Route path="/food" element={<Food />} />
            <Route path="/about" element={<About />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/whosaidthat" element={<Whosaidthat />} />
            <Route path="/music" element={<Music />} />
            <Route path="/spongebob" element={<Spongebob />} />
            <Route path="/general" element={<General />} />
          </Routes>
        </div>
          {/* You can include the Routes you want for signed-in users here */}
        </div>
      ) : (
        <div>
          <div className="navbar">
            <p id="quiz-name">Ultimate-Quiz</p>
            <ul className="navbar-list">
              <li className={isUserSignedIn ? null : "disabled"}>
                <Link to="/" id="navhover">
                  Quizzes
                </Link>
              </li>
              <li>
                <Link to="/signin" id="navhover">
                  Sign-In
                </Link>
              </li>
              <li>
                <Link to="/about" id="navhover">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <Routes>
            {/* Redirect to Sign-In if not signed in */}
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/signin" element={<SignIn setIsUserSignedIn={setIsUserSignedIn} isUserSignedIn={isUserSignedIn} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      )}
    </>
  );
}
