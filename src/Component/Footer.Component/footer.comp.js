import "./footer.comp.css";
import {FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin} from "react-icons/fa"


export function FooterComp(){
    return(
        <div className="footer">
            <div className="footer-content">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"white" , marginRight:"2rem"}}/>
                       Ameerpet, Hyderabad. 500082
                       
                    </div>
                    <div className="phone">
                       <h4>
                            <FaPhone size={20} style={{color:"white" , marginRight:"2rem"}}/>
                            +91-7587294886
                       </h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color:"white" , marginRight:"2rem"}}/>
                       jig86026@gmail.com</h4>
                    </div>
                </div>

               <div className="right">
                <h4>About Me</h4>
                <p>Hi!!! I am Jigyasa Singh I had graduated in  Master of Science(Informational Technology) in 2022. I also did 8 months internship from National Informatic Center as a software developer trainee in 2022 were I worked on their live project. I also did 3 months courses in UI and React.js from Naresh IT in 2023. I want to make my career as front end Developer and have a good knowledge in React.js, JavaScript, Redux, Hooks, Formik, Yup, Router, CSS, HTML, Node.js, Mongo db, Material UI and Bootstrap. </p>
                <div className="social">
                    <FaGithub size={30} style={{color:"white" , marginRight:"1rem"}}/>
                   <FaLinkedin size={20} style={{color:"white" , marginRight:"2rem"}}/>
                </div>
               </div>
            </div>

        </div>
    )
}