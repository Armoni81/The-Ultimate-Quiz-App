import {React, useState} from "react"
import {authentication} from "../firebase-config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../CSS/signin.css"
import { useNavigate } from "react-router-dom";


export default function SignIn ({setIsUserSignedIn, isUserSignedIn}){
const [ userInfo, setUserInfo ] = useState(null)
const navigate = useNavigate()

       
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try{
     const response = await signInWithPopup(authentication, provider)
      // const data = await response 
        if (response.user.uid) {
          setIsUserSignedIn(true);
          console.log("Sign-in complete");
          alert(`You have signed in! LET'S QUIZ ${response.user.displayName}. You will be redirected in 3 seconds`);
          setTimeout(() => {
            navigate('/') 
          }, 3000)
        }
    }
    catch (error){
        console.log(error, 'error')
    }
  
  };


   
     
        return (
          <p id = "quizdisplay2">Sign-In
          <body className="Container-signin">
            
            <div className = "sign-in-cont">
              
              <div id = "logo">
                
               <p id = "quiz-name">Ultimate-Quiz</p>
              </div>
              <div>
                <button onClick={signInWithGoogle} id = "bbutton-signin"> </button>
              </div>
              <div>
                {
                  isUserSignedIn ? (
                    <h6 id= "builtby">Welcome! Please click Quizzes to begin Quizzing</h6>

                  ):(
                    <h6 id= "builtby">Please Sign-in to begin Quizzing!</h6>
                  )
                }
               
              </div>
            </div>
          </body>
        </p>
        );
      }
      
      
    

