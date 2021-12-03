import React from "react"
import "../CSS/home.css"
import Questions from "./Questions"
import SportQuestions from "./SportQuestions"
import brain from "../images/brains-home-page.png"

export default function Home(){
    return(
        <div className= "home-cont">
            <div className= "quiz-home-half">
                <p id = "quizword-home"> The Ultimate Quiz App</p>
                
            </div>
            <div>
                <p id = "playnow">Play Now!</p>
            </div>
            <div className = "seperate-quizzes">
                <li id = "quizbox1"><a href = "/questions" id = "href1" >Ultimate Coder Quiz</a></li>
                <li id = "quizbox2" ><a href = "/sportquestions" id = "href1">Ultimate Sports Quiz </a></li>
                <li id = "quizbox3"><a href = "/sportquestions" id = "href1"> Ultimate Movies Quiz</a></li>
                <li id = "quizbox4"><a href = "/sportquestions" id = "href1"> City of Refuge</a></li>
                <li id = "quizbox5"><a href = "/sportquestions" id = "href1">Food</a></li>
                <li id = "quizbox6"><a href = "/sportquestions" id = "href1">Animals</a></li> 
                <li id = "quizbox5"><a href = "/sportquestions" id = "href1">Food</a></li>
                <li id = "quizbox6"><a href = "/sportquestions" id = "href1">Animals</a></li> 
                <li id = "quizbox5"><a href = "/sportquestions" id = "href1">Food</a></li>
                <li id = "quizbox6"><a href = "/sportquestions" id = "href1">Animals</a></li> 
                
            </div>
        </div>
    )
}