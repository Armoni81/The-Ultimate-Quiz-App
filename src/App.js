import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SignIn from './Components/SignIn';
import Questions from "./Components/Questions";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import SportQuestions from "./Components/SportQuestions";
import About from "./Components/about";
import COR from "./Components/COR";
import Food from "./Components/food";
import Animals from "./Components/animals";
import History from "./Components/Amhistory";
import Geography from "./Components/geography";
import "./App.css";
import Whosaidthat from "./Components/whosaidthat";
import Music from "./Components/music";
import Spongebob from "./Components/spongebob";
import General from "./Components/general";

export default function App() {
  return (

      <><nav>
      <div className="navbar">
        <p id="quiz-name">Ultimate-Quiz</p>
        <ul className="navbar-list">
          <li><Link to="/" id="navhover">Home</Link></li>
          <li><Link to="/signin" id="navhover">Sign-In</Link></li>
          <li><Link to="/about" id="navhover">About</Link></li>
        </ul>
      </div>
    </nav><Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/" element={<Home />} />
        <Route path="/sportquestions" element={<SportQuestions />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cor" element={<COR />} />
        <Route path="/food" element={<Food />} />
        <Route path="/about" element={<About />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/amHistory" element={<History />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/whosaidthat" element={<Whosaidthat />} />
        <Route path="/music" element={<Music />} />
        <Route path="/spongebob" element={<Spongebob />} />
        <Route path="/general" element={<General />} />
      </Routes></>
  );
}
