import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../CSS/home.css";

export default function Home() {
    return (
        <div className="home-cont">
            <div>
                <p id="playnow">Play Now!</p>
            </div>
            <div className="seperate-quizzes">
                <li id="quizbox1"><Link to="/questions" id="href1">Ultimate Coder Quiz</Link></li>
                <li id="quizbox2"><Link to="/sportquestions" id="href1">Ultimate Sports Quiz</Link></li>
                <li id="quizbox3"><Link to="/movies" id="href1">Ultimate Movies Quiz</Link></li>
                <li id="quizbox4"><Link to="/cor" id="href2">Ultimate City of Refuge Quiz</Link></li>
                <li id="quizbox5"><Link to="/food" id="href1">Ultimate Food Quiz</Link></li>
                <li id="quizbox6"><Link to="/animals" id="href1">Ultimate Animals Quiz</Link></li>
                <li id="quizbox8"><Link to="/geography" id="href1">Ultimate Geography Quiz</Link></li>
                <li id="quizbox9"><Link to="/whosaidthat" id="href2">Ultimate Who said that Quiz</Link></li>
                <li id="quizbox10"><Link to="/music" id="href1">Ultimate Music Quiz</Link></li>
                <li id="quizbox11"><Link to="/spongebob" id="href1">Ultimate Spongebob Quiz</Link></li>
                <li id="quizbox12"><Link to="/general" id="href3">Are you smarter than a 5th grader Quiz</Link></li>
            </div>
        </div>
    );
}
