import {Link,NavLink} from "react-router-dom";
import background from "../../assest/background.jpg"
import "./main.comp.css";
export function MainComp(){
    return(
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={background} alt="background" />
            </div>
            <div className="content" >
                <p>Hi!, I am Jigyasa Singh</p>
                <h1>React Developer</h1>
                <div>
                <NavLink to="https://drive.google.com/file/d/1Jr2lNuqexgmSXy4b0qb6jPrgLCAn7jbE/view?usp=share_link"><button className="btn">Resume</button></NavLink>

                    <Link to="/project" className="btn btn-light">projects</Link>
                    

                </div>
            </div>
           
        </div>
    )
}