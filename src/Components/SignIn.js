import React from "react"
import {authentication} from "../firebase-config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import logo from "../images/quiz.png"
import "../CSS/signin.css"

export default function SignIn (){
   
   

        const signInWithGoogle =  ()=>{
          const provider = new GoogleAuthProvider()
          signInWithPopup(authentication, provider)
          .then((re) =>{
            console.log(re)
          })
          .catch((err) =>{
            console.log(err)
          })
        }
        return (
          
          <body className="Container-signin">
            <div className = "sign-in-cont">
              
              <div id = "logo">
                
               <p id = "quiz-name">Ultimate-Quiz</p>
              </div>
              <div>
                <button onClick={signInWithGoogle} id = "bbutton-signin"> </button>
                <div id = "box22">1</div>
              </div>
              <div>
                <h6 id= "builtby">Built by Armoni Tigner</h6>
              </div>
            </div>
          </body>
        );
      }
      
      
    
