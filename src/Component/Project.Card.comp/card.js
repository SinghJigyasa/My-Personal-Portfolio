import "./Project.card.css";
import { NavLink} from "react-router-dom";


export function CardComp(props){
    return(
        <div className="work-container">
          
            <div className="project-containerCard">
                <div className="project-card">
                    <hr/>
                <h2 className="project-title">{props.title}</h2>
                    <img src={props.imgsrc} alt="img" />
                    <div className="pro-detais">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn">View</NavLink>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}