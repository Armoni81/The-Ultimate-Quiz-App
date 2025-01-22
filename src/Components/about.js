import React from "react"
import "../CSS/about.css"
export default function About(){
    
    return(
        <div className = "background">
            <p>About</p>
            <div id = "header1">
                <p id = "aboutme">Creator: Armoni Tigner</p>
                <p id = "aboutme">Built with React CSS JavaScript Google Firebase </p>
            </div>
            <div>
                <p id = "contact">Contact Me</p>
            </div>
            <div >
            <form action="https://submit-form.com/Rk6iiHfZ" className= "from">  
                    <label for="name">Name</label>
                    <input type="text" id= "name" name="name" placeholder=" Input Name" required="" />
                    <label for="email">Email</label>
                    <input type="email" id= "name" name="email" placeholder=" Input Email" required=""/>
                    <label for="message" style={{width: '100%'}}>Message</label>
                <textarea
                id="message"
                name="message"
                placeholder="Message"
                required=""
                ></textarea>
            <button  id = "send"type="submit"> Send</button>
            </form>
            </div>
        </div>
    )
}