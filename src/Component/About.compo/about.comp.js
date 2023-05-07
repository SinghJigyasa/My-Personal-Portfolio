import { Link, NavLink } from "react-router-dom";
import "./about.comp.css";
import JIG from "../../assest/JIG.jpeg";

export function AboutComp(){
    return(
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>
                   I am a react front-end developer. I create a responsive website
                   and get a chance to use my skills and to developed a new skills as well.
                </p>
                <NavLink to="https://drive.google.com/file/d/1Jr2lNuqexgmSXy4b0qb6jPrgLCAn7jbE/view?usp=share_link"><button className="btn">Resume</button></NavLink>
                
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={JIG} alt="ima" height={"300px"} width={"300px"} />
                    </div>
                </div>
            </div>

        </div>
    )
}